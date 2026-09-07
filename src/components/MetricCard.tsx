import type { ReactNode } from 'react';
interface Props{label:string;value:string;unit?:string;icon:ReactNode;trend?:string;type?:string}
export default function MetricCard({label,value,unit,icon,trend,type='cyan'}:Props){return <div className="metric-card card"><div className={`metric-icon ${type}`}>{icon}</div><div className="metric-info"><span>{label}</span><strong>{value}<small>{unit}</small></strong>{trend&&<em>{trend}</em>}</div></div>}
