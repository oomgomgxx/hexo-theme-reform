
$(document).ready(function() {
    wrapImageWithFancyBox();
});

// 包装img标签
function wrapImageWithFancyBox() {
    $('img')
    // .not('.sidebar-image img')
    .each(function() {

        var $image = $(this);
        var imageCaption = $image.attr('alt');
        var $imageWrapLink = $image.parent('a');

        if ($imageWrapLink.length < 1) {
            var src = this.getAttribute('src');
            var idx = src.lastIndexOf('?');
            if (idx != -1) {
                src = src.substring(0, idx);
            }
            $imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent('a');
        }
        $imageWrapLink.attr('data-fancybox', 'images');
        if (imageCaption) {
            $imageWrapLink.attr('data-caption', imageCaption);
        }
    });

    $('[data-fancybox="images"]').fancybox({
      buttons : [ 
        'slideShow',
		'thumbs',
        'zoom',
        'fullScreen',
        'close'
      ],
      thumbs : {
        autoStart : false
      }
    });
}