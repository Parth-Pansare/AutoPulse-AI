import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
export default function DashboardLayout({page,title,subtitle,children,onNavigate}:{page:string;title:string;subtitle?:string;children:ReactNode;onNavigate:(p:string)=>void}){return <div className="app-shell"><Sidebar page={page} onNavigate={onNavigate}/><main className="dashboard-main"><Topbar title={title} subtitle={subtitle} onNavigate={onNavigate}/><div className="page-content">{children}</div></main></div>}
