import { useState} from "react";

interface TextExpanderProps {
    collapsedNumWords?: number;
    expandedButtonText?: string;
    collapseButtonText?: string;
    expanded: boolean;
    children: string;
}
export function TextExpander({ collapsedNumWords, expandedButtonText= "Show more", collapseButtonText="Show less", expanded, children}: TextExpanderProps) {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const displayText = isExpanded ? children :   children.split(' ').slice(0, collapsedNumWords).join(' ').concat('...');
    return (
        <div>
            <p className=' h-full text-justify text-sm'>
                {displayText}
                    <span onClick={() => setIsExpanded((exp) => !exp)} className='cursor-pointer text-blue-500 transition-all duration-300 hover:underline'>
                        {isExpanded ? collapseButtonText : expandedButtonText}
                    </span>
            </p>
        </div>
    );
}