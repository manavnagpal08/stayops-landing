"use client";
import React, { useState } from "react";
import { MoreHorizontal, Shield, User, UserPlus, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";

const initialUsers = [
  { id: 1, name: "Sarah Connor", email: "sarah@stayops.ai", role: "Owner", status: "Active", lastActive: "Just now" },
  { id: 2, name: "John Smith", email: "john@stayops.ai", role: "Admin", status: "Active", lastActive: "2 hrs ago" },
  { id: 3, name: "Alice Wang", email: "alice@stayops.ai", role: "Editor", status: "Invited", lastActive: "Never" },
  { id: 4, name: "Robert Fox", email: "robert@stayops.ai", role: "Viewer", status: "Active", lastActive: "5 days ago" },
];

export default function UsersAdminPage() {
  const [users, setUsers] = useState(initialUsers);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Team & Roles</h2>
          <p className="text-muted">Manage access control and invite new members to your workspace.</p>
        </div>
        <Button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-white text-black hover:bg-white/90 gap-2"
        >
          <UserPlus className="w-4 h-4" /> {isAdding ? "Cancel" : "Invite Member"}
        </Button>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Card className="border-gold-500/30 bg-[#111] mb-8">
              <CardHeader>
                <CardTitle className="text-lg text-white">Invite New Member</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1 w-full space-y-2">
                    <label className="text-sm font-medium text-muted">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input type="email" placeholder="colleague@company.com" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-gold-500/50" />
                    </div>
                  </div>
                  <div className="w-full md:w-48 space-y-2">
                    <label className="text-sm font-medium text-muted">Role</label>
                    <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 appearance-none">
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Viewer</option>
                    </select>
                  </div>
                  <Button className="w-full md:w-auto bg-gold-500 hover:bg-gold-600 text-black py-6">
                    Send Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Card className="border-white/10 bg-[#111]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-semibold text-muted uppercase tracking-wider">
                <th className="p-4">User</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4 hidden md:table-cell">Last Active</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id} className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${idx === users.length -1 ? 'border-none' : ''}`}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center font-bold text-white">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-white">{user.name}</div>
                        <div className="text-xs text-muted">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 text-sm">
                      {user.role === 'Owner' && <Shield className="w-4 h-4 text-gold-500" />}
                      <span className={user.role === 'Owner' ? 'text-gold-400 font-medium' : 'text-white'}>{user.role}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                      user.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 hidden md:table-cell text-sm text-muted">
                    {user.lastActive}
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-muted hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
