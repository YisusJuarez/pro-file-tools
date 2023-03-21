// create the XML document
const builder = require('xmlbuilder2');
const createPlaylist = () => {
    const doc = builder.create('RVPresentationDocument', {
        height: '1080',
        width: '1920',
        docType: '0',
        versionNumber: '600',
        usedCount: '0',
        backgroundColor: '0 0 0 1',
        drawingBackgroundColor: 'false',
        CCLIDisplay: 'false',
        lastDateUsed: '2023-03-09T22:46:11+00:00',
        selectedArrangementID: '',
        category: 'Presentation',
        resourcesDirectory: '',
        notes: '',
        CCLIAuthor: '',
        CCLIArtistCredits: '',
        CCLISongTitle: '',
        CCLIPublisher: '',
        CCLICopyrightYear: '',
        CCLISongNumber: '',
        chordChartPath: '',
        os: '1',
        buildNumber: '6016'
    });

    const timelineElem = doc.ele('RVTimeline', {
        timeOffset: '0',
        duration: '0',
        selectedMediaTrackIndex: '-1',
        loop: 'false',
        rvXMLIvarName: 'timeline'
    });

    const timeCuesElem = timelineElem.ele('array', {
        rvXMLIvarName: 'timeCues'
    });

    const mediaTracksElem = timelineElem.ele('array', {
        rvXMLIvarName: 'mediaTracks'
    });

    const groupsElem = doc.ele('array', {
        rvXMLIvarName: 'groups'
    });

    const slideGroupingElem = groupsElem.ele('RVSlideGrouping', {
        name: '',
        color: '1 1 1 0',
        uuid: '42C269BF-FC05-41BC-8D80-1EBD6C9799DF'
    });

    const slidesElem = slideGroupingElem.ele('array', {
        rvXMLIvarName: 'slides'
    });

    const displaySlideElem = slidesElem.ele('RVDisplaySlide', {
        backgroundColor: '0 0 0 1',
        highlightColor: '1 1 1 0',
        drawingBackgroundColor: 'false',
        enabled: 'true',
        hotKey: '',
        label: '',
        notes: ''
    });

    const backgroundElem = displaySlideElem.ele('RVBackground', {
        backgroundColor: '0 0 0 1',
        color: '1 1 1 1',
        drawingBackgroundColor: 'false',
        borderWidth: '0',
        cornerRadius: '0',
        frameType: '0',
        borderColor: '1 1 1 1',
        dropShadow: 'false',
        visible: 'true',
        rvXMLIvarName: 'background'
    });

    const textElem = displaySlideElem.ele('RVTextElement', {
        backgroundColor: '0 0 0 0',
        drawingBackgroundColor: 'false',
        dropShadow: 'false',
        foregroundColor: '1 1 1 1',
        highlightColor: '1 1 1 0',
        lineSpacing: '120',
        maxWidth: '0',
        minWidth: '0',
        outlineColor: '0 0 0 1',
        outlineWidth: '0',
        rotation: '0',
        scaleX: '1',
        scaleY: '1',
        strokeColor: '0 0 0 1',
        strokeWidth: '0',
        text: 'Hello, World!',
        textAlignment: '1',
        textFlags: '0',
        textSize: '80',
    })
}

exports.createPlaylist = createPlaylist