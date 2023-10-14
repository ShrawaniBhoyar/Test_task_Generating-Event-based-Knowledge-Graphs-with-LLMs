'use client';
import axios from 'axios';
import React, { useState, useRef } from 'react';
import { getEventsToKGJSONPrompt } from './generatePrompt'
import nextConfig from '../../../next.config';
import KnowledgeGraph from './knowledgeGraph';

const ShowGraph = (graphData) => {
  return (<>
    <div style={{ flex: '1' }}>
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Knowledge Graph</h4>
      </div>
      <div className="card-body">
        <div>
          <KnowledgeGraph graphData={graphData} />
        </div>
      </div>
    </div>
  </>)
}

const GraphMenu = ({ showGraph, setShowGraph, showEvents,setShowEvents }) => {
  return (
    <div style={{ display: 'flex' }}>
      {
        showGraph && <>
          <button style={{ marginRight: "1%", marginBottom: "1%" }} onClick={() => { setShowGraph(false), setShowEvents(true) }} type="button" class="btn btn-primary">Generate Another</button>
        </>
      }
      {
        showGraph && !showEvents && <>
          <button style={{ marginRight: "1%", marginBottom: "1%" }} onClick={() => setShowEvents(true)} type="button" class="btn btn-primary">Show Events</button>
        </>
      }
      {
        showGraph && showEvents && <>
          <button style={{ marginRight: "1%", marginBottom: "1%" }} onClick={() => setShowEvents(false)} type="button" class="btn btn-primary">Hide Events</button>
        </>
      }
    </div>
  )
}
export default function ProcessEvents() {
  const [events, setEvents] = useState("");
  const [showGraph, setShowGraph] = useState(false);
  const [graphData, setGraphData] = useState({});
  const [showEvents, setShowEvents] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const eventsTextArea = useRef();

  const convertEventToJSONFromGGA = async () => {
    setIsLoading(true)

    const parsedEvents = events.length < 3100 ? events : events.slice(0, 3100)
    
    console.log({
      a: parsedEvents,
      b:parsedEvents.length
    })
   const {data}  = await axios.post(nextConfig.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_API_URL,
      { "prompt": getEventsToKGJSONPrompt(parsedEvents) })

    let makeGraphData = null
    
    try {
      makeGraphData=JSON.parse(data.candidates[0].output.replace('```', '').replace('``', '').replace('`', '').replace('json', '').replace(/\n/g, "").toString())
    }
    catch (e) {
      setEvents(events.slice(0, graphData.length*0.75))
    }
   
    setGraphData(makeGraphData)
    setShowGraph(true)
    setShowEvents(false)
    setIsLoading(false)
  }

  return (
    <>
      <div className="card-deck mb-3 text-center">
        <GraphMenu showGraph={showGraph} showEvents={showEvents} setShowGraph={setShowGraph} setShowEvents={setShowEvents} />
        <div className="card box-shadow" style={{ display: 'flex', flexDirection: "row" }}>

          {showEvents && <>
            <div style={{ flex: '1' }}>
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Describe Events</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <textarea onChange={(e) => setEvents(e.target.value)} ref={eventsTextArea} className="form-control" placeholder="Type your events here..." rows="3"></textarea>
                </div>
                <br></br>
                <button  
                  disabled={isLoading}
                type="button" onClick={() => {
                  setEvents(eventsTextArea.current.value)
                  convertEventToJSONFromGGA()
                }} className="btn btn-lg btn-block btn-outline-primary">
                  
                  {
                    isLoading ?
                      <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                      </div>
                      : "Create Knowledge Graph"
                  }
                  </button>
              </div>
            </div>
          </>}

          {
            showGraph && <ShowGraph graphData={graphData} />
          }
        </div>
      </div>
    </>
  )
}
