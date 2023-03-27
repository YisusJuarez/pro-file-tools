// create the XML document
const builder = require('xmlbuilder2');
const crypto = require('crypto');

function generarRTFData(texto) {
    const rtf = "{\\rtf1\\prortf1\\ansi\\ansicpg1252\\uc1\\htmautsp\\deff2{\\fonttbl{\\f0\\fcharset0 Times New Roman;}{\\f2\\fcharset0 Georgia;}{\\f3\\fcharset0 Trebuchet MS;}}{\\colortbl;\\red0\\green0\\blue0;\\red255\\green255\\blue255;}\\loch\\hich\\dbch\\pard\\slleading0\\plain\\ltrpar\\itap0{\\lang1033\\fs32\\outl0\\strokewidth-20\\strokec1\\f2\\cf1 \\cf1\\qc{\\fs143\\outl0\\strokewidth-20\\strokec1\\f3 {\\lang2058\\cf2\\ltrch " + texto + "}\\li0\\sa0\\sb0\\fi0\\qc\\par}\r\n}\r\n}";
    return Buffer.from(rtf).toString('base64');
}

function generateWFlow(text) {
    const xaml = `<FlowDocument TextAlignment="Center" PagePadding="5,0,5,0" AllowDrop="True" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"><Paragraph TextAlignment="Center"><Run FontFamily="Trebuchet MS" FontStyle="Normal" FontWeight="Normal" FontStretch="Normal" FontSize="71.25" Foreground="#FFFFFFFF" xml:lang="es-mx" Block.TextAlignment="Center"><Run.TextDecorations><TextDecorationCollection /></Run.TextDecorations>${text}</Run></Paragraph></FlowDocument>`;
    return Buffer.from(xaml).toString('base64');
}

function generateWFont(text) {
    const wfont = `<?xml version="1.0" encoding="utf-16"?><RVFont xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/ProPresenter.Common"><Kerning>0</Kerning><LineSpacing>0</LineSpacing><OutlineColor xmlns:d2p1="http://schemas.datacontract.org/2004/07/System.Windows.Media"><d2p1:A>255</d2p1:A><d2p1:B>0</d2p1:B><d2p1:G>0</d2p1:G><d2p1:R>0</d2p1:R><d2p1:ScA>1</d2p1:ScA><d2p1:ScB>0</d2p1:ScB><d2p1:ScG>0</d2p1:ScG><d2p1:ScR>0</d2p1:ScR></OutlineColor><OutlineWidth>1</OutlineWidth><Variants>Normal</Variants><Text>${text}</Text></RVFont>`;
    return Buffer.from(wfont).toString('base64');
}

const createPlaylist = (formatSong) => {
    const root = builder.create({ version: '1.0', encoding: 'utf-8' })
        .ele('RVPresentationDocument', {
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
            buildNumber: '6016',
        })
        .ele('RVTimeline', {
            timeOffset: '0',
            duration: '0',
            selectedMediaTrackIndex: '-1',
            loop: false,
            rvXMLIvarName: 'timeline',
        })
        .ele('array', { rvXMLIvarName: 'timeCues' }).up()
        .ele('array', { rvXMLIvarName: 'mediaTracks' }).up()
        .up()
        .ele('array', { rvXMLIvarName: 'groups' })
        .ele('RVSlideGrouping', {
            name: '',
            color: '1 1 1 0',
            uuid: crypto.randomUUID(),
        })
        .ele('array', { rvXMLIvarName: 'slides' });

    for (let i = 0; i < formatSong.length; i++) {
        root.ele("RVDisplaySlide", {
            backgroundColor: "0 0 0 1",
            highlightColor: "1 1 1 0",
            drawingBackgroundColor: false,
            enabled: true,
            hotKey: "",
            label: "",
            notes: "",
            UUID: crypto.randomUUID(),
            chordChartPath: ""
        })
            .ele("array", { rvXMLIvarName: "cues" }).up()
            .ele("array", { rvXMLIvarName: "displayElements" })
            .ele("RVTextElement", {
                displayName: "Default",
                UUID: crypto.randomUUID(),
                typeID: "0",
                displayDelay: "0",
                locked: false,
                persistent: "0",
                fromTemplate: false,
                opacity: "1",
                source: "",
                bezelRadius: "0",
                rotation: "0",
                drawingFill: false,
                drawingShadow: false,
                drawingStroke: false,
                fillColor: "1 1 1 1",
                adjustsHeightToFit: false,
                verticalAlignment: "0",
                revealType: "0"
            })
            .ele("RVRect3D", { rvXMLIvarName: "position" }).txt('{162 833.0923 0 1600 131}').up()
            .ele("shadow", { rvXMLIvarName: "shadow" }).txt('4|0 0 0 1|{2.82843,-2.82843}').up()
            .ele("dictionary", { rvXMLIvarName: "stroke" })
            .ele("NSColor", { rvXMLDictionaryKey: "RVShapeElementStrokeColorKey" }).txt("1 1 1 1").up()
            .ele("NSNumber", { rvXMLDictionaryKey: "RVShapeElementStrokeWidthKey", hint: "double" }).txt("0").up()
            .up()
            .ele("NSString", { rvXMLIvarName: "PlainText" }).txt(Buffer.from(formatSong[i]).toString('base64')).up()
            .ele("NSString", { rvXMLIvarName: "RTFData" }).txt(generarRTFData(formatSong[i])).up()
            .ele("NSString", { rvXMLIvarName: "WinFlowData" }).txt(generateWFlow(formatSong[i])).up()
            .ele("NSString", { rvXMLIvarName: "WinFontData" }).txt(generateWFont(formatSong[i])).up()
            .up()
            .up()
            .up()
            .up()
            .up();
    }



    const xml = root.up().up().up().ele("array", { rvXMLIvarName: "arrangements" }).up().up().end({ prettyPrint: true });
    return xml;

}

exports.createPlaylist = createPlaylist