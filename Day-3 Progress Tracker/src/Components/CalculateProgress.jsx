export function findSectionProgress(subsections) {
    let completed = 0;
    for (let i=0; i< subsections.length; i++ ) {
        if (subsections[i].completed) completed++;
    }
    return Math.round((completed / subsections.length) * 100);
}


export function findOverallProgress(reactList) {
    let totalProgress = 0;
    for (let i=0; i<reactList.length; i++) {
        totalProgress += reactList[i].progress;
    }

    return Math.round((totalProgress / (reactList.length *100)) *100);
}

