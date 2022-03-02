import React from "react";
import IdeaList from "../../components/Idea/IdeaList";

const ideas = ({ ideas, page}) => {
    console.log(ideas, page)
    const limit=5;
    const startIndex = (page -1) * limit;
    const selectedIdeas = ideas.slice(startIndex, startIndex*limit);
    return selectedIdeas.map(idea => (
                <IdeaList idea={idea}/>
        ))
}
 
export default ideas;