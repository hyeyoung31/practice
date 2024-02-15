$(function(){
	const $frame1 = $('#basic1');
    const $wrap = $frame1.parent();
    // const $frame2 = $('#basic2');
    // const $wrap2 = $frame2.parent();


  
    $frame1.sly({
        horizontal: 1,
        itemNav: 'centered',   
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        pagesBar: $wrap.find('.pages'),
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1
    });

});