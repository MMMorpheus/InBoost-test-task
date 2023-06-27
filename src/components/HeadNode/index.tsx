import {FC} from 'react'
import { Handle, Position } from 'reactflow';
import { CheckboxNode } from '..'

export const HeadNode:FC = ({data}) => {


    return (
        <div>
            <CheckboxNode />
            <Handle type="source" position={Position.Bottom} />
        </div>
    )
}