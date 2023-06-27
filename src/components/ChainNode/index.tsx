import {FC} from 'react'
import { Handle, Position } from 'reactflow';
import { CheckboxNode } from '..'

export const ChainNode:FC = ({data, isConnectable}) => {


    return (
        <div className="nodrag">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable}/>
            <CheckboxNode />
            <Handle type="source" position={Position.Bottom} id='a'/>
        </div>
    )
}