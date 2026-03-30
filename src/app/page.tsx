'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: message };
    setMessages([...messages, userMessage]);
    setMessage('');
    setLoading(true);

    // TODO: Connect to RAG backend
    // For now, simulate a response
    setTimeout(() => {
      const botMessage = {
        role: 'assistant',
        content: 'The Word is alive and active. Seek wisdom in silence, and He will speak to your heart.',
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f5f5f5] flex flex-col">
      {/* Header */}
      <header className="border-b border-[#333] py-6 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">
            Talk to <span className="text-[#d4af37]">Jesus Christ</span>
          </h1>
          <p className="text-[#999] mt-2">Scripture-grounded wisdom, always at your fingertips</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: About */}
          <div className="fade-in space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Seek <span className="text-[#d4af37]">Divine Wisdom</span>
            </h2>
            <p className="text-lg text-[#b0b0b0] leading-relaxed">
              An AI companion rooted in Scripture. Ask questions about faith, life, and meaning. Get answers grounded in the Bible and Christian wisdom.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="btn-primary">Start Conversation</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          {/* Right: Visual (Renaissance-inspired) */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-gradient-to-br from-[#d4af37]/30 to-[#8b0000]/20 rounded-full blur-3xl"></div>
            <div className="relative text-center z-10">
              <div className="text-8xl mb-4">✨</div>
              <p className="text-xl text-[#d4af37] font-light italic">In God&apos;s Word, we find light.</p>
            </div>
          </div>
        </div>

        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      </section>

      {/* Chat Section */}
      <section className="flex-1 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto mb-6 space-y-4 rounded-lg bg-[#1a1a1a] p-6 border border-[#333]">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center">
                <p className="text-[#666] text-lg">Begin your conversation with a question…</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-[#d4af37] text-black rounded-br-none'
                        : 'bg-[#2a2a2a] text-[#e0e0e0] border-l-2 border-[#d4af37] rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#2a2a2a] border-l-2 border-[#d4af37] px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask anything about faith, life, Scripture…"
              className="flex-1 px-6 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-[#f5f5f5] placeholder-[#666] focus:outline-none focus:border-[#d4af37] transition-colors"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !message.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Listening...' : 'Send'}
            </button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Why Talk to Jesus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card slide-up">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Scripture-Grounded</h3>
              <p>Every answer is rooted in the Bible and Christian wisdom traditions.</p>
            </div>
            <div className="card slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🕯️</div>
              <h3 className="text-xl font-bold mb-3 text-[#d4af37]">24/7 Guidance</h3>
              <p>Always available. No judgment. Just genuine, faith-based companionship.</p>
            </div>
            <div className="card slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Free & Giving</h3>
              <p>Sustained by donations. No ads, no tracking. Pure spiritual support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 text-center border-t border-[#333]">
        <h2 className="mb-4">Ready to connect?</h2>
        <p className="text-[#999] mb-8 max-w-2xl mx-auto">
          Seek wisdom, find peace, and grow closer to Christ through conversation.
        </p>
        <button className="btn-primary">Start Your Conversation</button>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-[#333] py-8 px-8 mt-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-[#666]">
          <p>&copy; 2026 TalkToJesusChrist. All are welcome.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#d4af37] transition-colors">About</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
