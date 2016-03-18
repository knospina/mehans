var gallery = (function() {
    'use strict';
    return {
        init: (function(){
            this.onload();
            jQuery("#gallery img").unveil();
        }),
        onload: (function(){
            var gallery = jQuery.find('#gallery');
            var viewport = jQuery(gallery).find('#viewport');
            var slider = jQuery(gallery).find('#slider-container');

            this.showImageOnLoad(viewport, slider);
            this.showImageOnClick(viewport, slider);
            this.moveSlider(slider);
            this.moveViewport(viewport, slider);
            this.closeFullImage(viewport);
        }),
        showImageOnLoad: (function(viewport, slider){
            var sliderElements = slider.find('li');
            var image;
            jQuery.each(sliderElements, function(){
                if(jQuery(this).attr('data-order') == '1') {
                    image = jQuery(this).clone();
                }
            });
            viewport.find('#img-container').append(image);
            this.addFullSize(viewport);
        }),
        showImageOnClick: (function(viewport, slider){
            var sliderElements = slider.find('li');
            var image;
            var self = this;
            jQuery(sliderElements).on('click', function(){
                var order = jQuery(this).attr('data-order');
                image = jQuery(this).clone();
                viewport.find('#img-container li').remove();
                viewport.find('#img-container').append(image);
                self.addFullSize(viewport);
            }); 
        }),
        moveSlider: (function(slider){
            var leftArr = slider.find('.prev');
            var rightArr = slider.find('.next');

            leftArr.on('click', function(){

                var lastElement = slider.find('ul li').last();
                slider.find('ul').prepend(lastElement);

            });

            rightArr.on('click', function(){

                var firstElement = slider.find('ul li').first();
                slider.find('ul').append(firstElement);

            });
        }),
        moveViewport: (function(viewport, slider){

            var leftArr = viewport.find('.prev');
            var rightArr = viewport.find('.next');
            var sliderElements = slider.find('li');
            var image;
            var self = this;

            leftArr.on('click', function(){

                var currentImage = viewport.find('li').attr('data-order');

                if(currentImage == 1) {

                    sliderElements.each(function(){
                        if(jQuery(this).attr('data-order') == '71'){
                            image = jQuery(this).clone();
                            viewport.find('#img-container li').remove();
                            viewport.find('#img-container').append(image);
                        }
                    });

                } else {
                    var itemNumber = parseInt(currentImage) - 1;
                    sliderElements.each(function(){                
                        if(jQuery(this).attr('data-order') == itemNumber){
                            image = jQuery(this).clone();
                            viewport.find('#img-container li').remove();
                            viewport.find('#img-container').append(image);
                        }
                    });
                }

                self.addFullSize(viewport);
            });

            rightArr.on('click', function(){

                var currentImage = viewport.find('li').attr('data-order');

                if(currentImage == 71) {

                    sliderElements.each(function(){
                        if(jQuery(this).attr('data-order') == '1'){
                            image = jQuery(this).clone();
                            viewport.find('#img-container li').remove();
                            viewport.find('#img-container').append(image);
                        }
                    });

                } else {
                    var itemNumber = parseInt(currentImage) + 1;
                    sliderElements.each(function(){               
                        if(jQuery(this).attr('data-order') == itemNumber){
                            image = jQuery(this).clone();
                            viewport.find('#img-container li').remove();
                            viewport.find('#img-container').append(image);
                        }
                    });
                }

                self.addFullSize(viewport);
            });
        }),
        addFullSize: (function(viewport){
            var image = viewport.find('li img');
            var fullWidthIcon = viewport.find('#full-size');

            image.on('load', function(){
                if(jQuery(this).width() == '315') {
                    fullWidthIcon.css('right', '123px');
                } else {
                    fullWidthIcon.css('right', '0');
                }

            });

            this.openFullImage(viewport);
        }),
        openFullImage: (function(viewport){
            var image = viewport.find('li img');
            var fullWidthIcon = viewport.find('#full-size');
            var fullContainer = viewport.find('#overlay');
            var fullImage;

            fullWidthIcon.on('click', function(){

                fullContainer.find('img').remove();

                fullImage = image.clone();
                fullContainer.append(fullImage);
                jQuery('body').addClass('overlay-on');

                if (fullImage.width() == '732') {
                    jQuery('#close-full').css({
                        'right': '117px',
                        'display': 'block'
                    });            
                } else {
                    jQuery('#close-full').css('display', 'block');
                }

            });
        }),
        closeFullImage: (function(viewport){
            var fullContainer = viewport.find('#overlay');

            jQuery('#dark-overlay, #close-full').on('click', function(){
                if(jQuery('body').hasClass('overlay-on')) { 
                    jQuery('body').removeClass('overlay-on');
                    fullContainer.find('img').remove();
                    jQuery('#close-full').removeAttr('style');
                }
            });
        })
    }

}());