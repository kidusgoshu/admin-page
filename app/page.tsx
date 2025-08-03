"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Workflow, Database, Handshake, Users, FileText } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Trust Protocol</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
          </nav>
          <Link href="/admin/dashboard">
            <Button>Admin Login</Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              A New Era of Data Governance
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10">
              The Trust Protocol Admin Portal provides the tools to manage a secure, transparent, and efficient data sharing ecosystem.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/admin/dashboard">
                <Button size="lg" className="px-8 py-4 text-lg">Go to Admin Dashboard</Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">A streamlined process for trusted data exchange.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-5 mb-6">
                <Workflow className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">1. Define Roles & Schemas</h3>
              <p className="text-gray-600">Establish the foundational rules of your ecosystem by defining institutional roles and data schemas.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 rounded-full p-5 mb-6">
                <Handshake className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">2. Manage Relationships</h3>
              <p className="text-gray-600">Create and oversee the data sharing agreements between different roles in the network.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-full p-5 mb-6">
                <FileText className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">3. Audit & Monitor</h3>
              <p className="text-gray-600">Track all data requests and maintain a transparent audit trail for compliance and security.</p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Everything you need to govern your data ecosystem.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Institution Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Oversee all participating institutions, manage their details, and control their active status.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Role Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Define and manage the roles that institutions can assume, dictating their capabilities.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                        <Handshake className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Relationship Management</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700">Establish and audit data sharing rules between different roles for secure exchange.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <div className="bg-yellow-100 rounded-lg p-3">
                    <Database className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Data Schema Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Maintain a comprehensive registry of all verifiable data schemas for consistency.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Data Request Audit Trail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Monitor and audit every data request transaction in real-time for full transparency.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Trust Protocol Section */}
        <section id="about" className="container mx-auto px-6 py-20">
          <div className="bg-blue-600 text-white rounded-lg p-12 text-center shadow-2xl">
              <h2 className="text-4xl font-bold mb-4">About the Trust Protocol</h2>
              <p className="max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed">
                The Trust Protocol is a decentralized framework for secure, verifiable, and consent-driven data exchange. It empowers individuals with control over their data while enabling organizations to access necessary information with transparency and auditability.
              </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Trust Protocol</h3>
              <p className="text-gray-400 mt-2">Building a secure and transparent data ecosystem.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-gray-400 mt-4">For support, please contact:</p>
              <a href="mailto:support@trustprotocol.com" className="text-blue-400 hover:underline">support@trustprotocol.com</a>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2025 Trust Protocol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 