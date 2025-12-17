
import React, { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

const MyAgent = ({ isDark }) => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    // Add user message
    const userMessage = { sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()

      if (data.success) {
        const botMessage = { sender: 'bot', text: data.answer }
        setMessages((prev) => [...prev, botMessage])
      } else {
        const errorMessage = { sender: 'bot', text: 'Error: ' + data.message }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage = { sender: 'bot', text: 'Network error: Failed to reach backend.' }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div 
      className={`border-2 ${isDark ? 'border-gray-700 bg-neutral-800' : 'border-neutral-300 bg-white'} rounded-lg shadow-lg flex flex-col`}
      style={{ width: '40vw',height: '75vh',minWidth: '400px',minHeight: '500px'}}
    >
      {/* Header */}
      <div className={`flex items-center gap-3 border-b px-4 py-3 flex-shrink-0 ${isDark ? 'border-gray-700' : 'border-neutral-300'}`}>
        <img
          src="/cropped_circle_image.png"
          className={`w-10 h-10 rounded-full object-cover border-2 flex-shrink-0 ${isDark ? 'border-white' : 'border-black'}`}
          alt="Arnav's profile"
        />

        <div className="flex-1 min-w-0">
          <div className={`font-semibold text-base ${isDark ? 'text-white' : 'text-black'}`}>
            Arnav Portfolio Assistant 
            <span className='text-sm transition-colors hover:text-red-500 animate-pulse text-red-500'>{" "} BETA</span>
          </div>

          <div className={`flex items-center gap-1.5 text-sm font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span>
            </span>
            Offline <span className='font-normal'>(Actively Working on it)</span> 
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className={`flex-1 overflow-y-auto p-4 ${isDark ? 'bg-neutral-800' : 'bg-white'}`}>
        <div className="space-y-3">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? isDark 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-500 text-white'
                    : isDark
                      ? 'bg-neutral-700 text-gray-100'
                      : 'bg-neutral-100 text-neutral-900'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className={`px-4 py-2 rounded-lg ${isDark ? 'bg-neutral-700 text-gray-100' : 'bg-neutral-100 text-neutral-900'}`}>
                <span className="inline-block animate-pulse">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input Section */}
      <div className={`flex-shrink-0 border-t px-4 py-4 ${isDark ? 'border-gray-700 bg-neutral-800' : 'border-neutral-100 bg-white'}`}>
        <div className={`flex items-end gap-3 px-4 py-3 rounded-xl border transition-all ${
          isDark 
            ? 'bg-neutral-900 border-gray-700 hover:border-gray-600 focus-within:border-gray-500' 
            : 'bg-white border-neutral-200 hover:border-neutral-300 focus-within:border-neutral-900'
        }`}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Ask me anything about Arnav...'
            disabled={loading}
            className={`flex-1 resize-none outline-none text-base leading-relaxed bg-transparent ${
              isDark ? 'text-white placeholder-gray-500' : 'text-neutral-900 placeholder-neutral-400'
            }`}
            style={{ height: '24px', maxHeight: '120px' }}
            rows={1}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
              isDark
                ? 'bg-white text-neutral-900 hover:bg-gray-100 disabled:bg-gray-700 disabled:text-gray-500'
                : 'bg-neutral-900 text-white hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400'
            }`}
          >
            <Send size={17} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyAgent