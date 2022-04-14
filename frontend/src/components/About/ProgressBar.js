import React from 'react';
  
const ProgressBar = ({tag_text, progress}) => {
     
    const Parentdiv = {
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
    }
        
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        borderRadius:40,
        textAlign: 'right',
        
    }
        
    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900,
    }
        
    return (
        <div className='tool_progress_bar' style={Parentdiv}>
            <div className='bar_fill' style={Childdiv}>
                <div className='tag'>{tag_text}</div>
            </div>
            <span className='bar_percent' style={progresstext}>{`${progress}%`}</span>
        </div>
    );
}
  
export default ProgressBar;