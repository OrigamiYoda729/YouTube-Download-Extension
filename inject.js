
	function param(name) {
		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
	}

	if (window.location.hostname === "www.youtube.com") {

		while (true) {
			var video;
			if(param('v')) {
				video = param('v');
			} else {
				if (!window.location.href.search('embed/')) {
					video = window.location.href.split('embed/')[1].split('?')[0];
				} else {
					alert('Please go to a video on YouTube.');
					break;
				}
			}

			$.get('https://www.googleapis.com/youtube/v3/videos?id=' + video + '&part=snippet&key=AIzaSyAcRagsiCAWRr7N1wInG4S86eWFHSJ4i4E', function(data) {

				document.title = 'Download Video';

				$('body').fadeOut(800);
				setTimeout(function(){
					$('head').html('<link href="https://fonts.googleapis.com/css?family=Montserrat:600,700|Open+Sans:400,700" rel="stylesheet">');
					$('head').append('<link rel="icon" href="https://raw.githubusercontent.com/OrigamiYoda729/YouTube-Download-Extension/master/icon.png" />');
					$('head').append('<title>Download Videos</title>')
					$('body').html('');
					$('body').css('font-size', '10px');
					$('body').css('background', '#fafafa');
					$('body').css('color', '#222');
					$('body').css('padding-top', '10px');
					$('body').css('padding-left', '25px');
					$('body').append('<img src="' + data.items[0].snippet.thumbnails.maxres.url + '" style="margin-right:25px;margin-top:15px;position:absolute;"height="90px"width="150px"></img>');
					$('body').append('<div style="display:inline-block;width:calc(100% - 200px);margin-left:175px;"><h1 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:4em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:15px;margin-bottom:0;cursor:pointer;"onclick="location.href=\'https://www.youtube.com/watch?v=' + video + '\'">' + data.items[0].snippet.localized.title + '</h1><h2 style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:2.25em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:5px;cursor:pointer"onclick="location.href=\'https://www.youtube.com/channel/' + data.items[0].snippet.channelId + '\'">&thinsp;' + data.items[0].snippet.channelTitle + '</h2></div>');
					$('body').append('<br /><br /><p style="font-family:\'Open Sans\';font-weight:400;font-size:15px;line-height:1.7;"><span style="font-size:15.5px;font-weight:700;">Video Description:</span><br />' + data.items[0].snippet.description + '</p><br />');
					$('body').append('<p style="font-family:\'Open Sans\';font-weight:700;font-size:15.5px;line-height:1.7;">Download Video:</p>')
					$('body').append('<iframe src="https://www.yt-download.org/@api/button/videos/' + video + '" width="510px" height="100px" allowtransparency="true" scrolling="no" style="border:none"></iframe><br /><br /><br />')
					$('body').append('<p style="font-family:\'Open Sans\';font-weight:700;font-size:15.5px;line-height:1.7;">Download Audio:</p>')
					$('body').append('<iframe src="https://www.yt-download.org/@api/button/mp3/' + video + '" width="510px" height="100px" allowtransparency="true" scrolling="no" style="border:none"></iframe><br />')
					$('body').fadeIn(800);
				}, 800);

			});

			break;

		}

  } else {

		var frames = [];
		var split1 = '';

		$('iframe').each(function() {
			var source = $(this).attr('src');
			if (source.search('www.youtube.com') != -1 || source.search('www.youtube-nocookie.com') != -1) {
				split1 = source.split('embed/')[1];
				if (split1.search(/\?/) != -1) {
					frames.push(split1.split('?')[0]);
				} else {
					frames.push(split1);
				}
			}
		});

		if (frames.length == 0) {
			alert('No videos were found on this page.\nPlease go to a video on YouTube or a different page with an embedded YouTube video.')
		} else {

			if (frames.length == 1) {
				$.get('https://www.googleapis.com/youtube/v3/videos?id=' + frames[0] + '&part=snippet&key=AIzaSyAcRagsiCAWRr7N1wInG4S86eWFHSJ4i4E', function(data) {

					document.title = 'Download Video';

					$('body').fadeOut(800);
					setTimeout(function(){
						$('head').html('<link href="https://fonts.googleapis.com/css?family=Montserrat:600,700|Open+Sans:400,700" rel="stylesheet">');
						$('head').append('<link rel="icon" href="https://raw.githubusercontent.com/OrigamiYoda729/YouTube-Download-Extension/master/icon.png" />');
						$('head').append('<title>Download Video</title>')
						$('body').html('');
						$('body').css('font-size', '10px');
						$('body').css('background', '#fafafa');
						$('body').css('color', '#222');
						$('body').css('padding-top', '10px');
						$('body').css('padding-left', '25px');
						$('body').append('<img src="' + data.items[0].snippet.thumbnails.maxres.url + '" style="margin-right:25px;margin-top:15px;position:absolute;"height="90px"width="150px"></img>');
						$('body').append('<div style="display:inline-block;width:calc(100% - 200px);margin-left:175px;"><h1 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:4em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:15px;margin-bottom:0;cursor:pointer;"onclick="location.href=\'https://www.youtube.com/watch?v=' + video + '\'">' + data.items[0].snippet.localized.title + '</h1><h2 style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:2.25em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:5px;cursor:pointer"onclick="location.href=\'https://www.youtube.com/channel/' + data.items[0].snippet.channelId + '\'">&thinsp;' + data.items[0].snippet.channelTitle + '</h2></div>');
						$('body').append('<br /><br /><p style="font-family:\'Open Sans\';font-weight:400;font-size:15px;line-height:1.7;"><span style="font-size:15.5px;font-weight:700;">Video Description:</span><br />' + data.items[0].snippet.description + '</p><br />');
						$('body').append('<p style="font-family:\'Open Sans\';font-weight:700;font-size:15.5px;line-height:1.7;">Download Video:</p>')
						$('body').append('<iframe src="https://www.yt-download.org/@api/button/videos/' + frames[0] + '" width="510px" height="100px" allowtransparency="true" scrolling="no" style="border:none"></iframe><br /><br /><br />')
						$('body').append('<p style="font-family:\'Open Sans\';font-weight:700;font-size:15.5px;line-height:1.7;">Download Audio:</p>')
						$('body').append('<iframe src="https://www.yt-download.org/@api/button/mp3/' + frames[0] + '" width="510px" height="100px" allowtransparency="true" scrolling="no" style="border:none"></iframe><br />')
						$('body').fadeIn(800);
					}, 800);

				});
			} else {

				$('body').fadeOut(800);
				setTimeout(function(){

					$('head').html('<link href="https://fonts.googleapis.com/css?family=Montserrat:600,700|Open+Sans:400,700" rel="stylesheet" />');
					$('head').append('<link rel="icon" href="https://raw.githubusercontent.com/OrigamiYoda729/YouTube-Download-Extension/master/icon.png" />');
					$('head').append('<title>Download Videos</title>')
					$('body').html('');
					$('body').css('font-size', '10px');
					$('body').css('background', '#fafafa');
					$('body').css('color', '#222');
					$('body').css('padding-top', '10px');
					$('body').css('padding-left', '25px');
					$('body').css('padding-right', '25px');

					for (i = 0; i < frames.length; i++) {
						$.get('https://www.googleapis.com/youtube/v3/videos?id=' + frames[i] + '&part=snippet&key=AIzaSyAcRagsiCAWRr7N1wInG4S86eWFHSJ4i4E', function(data) {
							$('body').append('<h2 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:2em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:15px;margin-bottom:25px;cursor:pointer;width:100%;">Downloadable Video #' + (i - 2).toString() + ':</h2>')
							$('body').append('<img src="' + data.items[0].snippet.thumbnails.maxres.url + '" style="margin-right:25px;margin-top:15px;position:absolute;"height="90px"width="150px"></img>');
							$('body').append('<div style="display:inline-block;width:calc(100% - 200px);margin-left:175px;"><h1 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:4em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:15px;margin-bottom:0;cursor:pointer;"onclick="location.href=\'https://www.youtube.com/watch?v=' + video + '\'">' + data.items[0].snippet.localized.title + '</h1><h2 	style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:2.25em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:5px;cursor:pointer"onclick="location.href=\'https://www.youtube.com/channel/' + data.items[0].snippet.channelId + '\'">&thinsp;' + data.items[0].snippet.channelTitle + '</h2></div>');
							$('body').append('<br /><br /><p style="font-family:\'Open Sans\';font-weight:400;font-size:15px;line-height:1.7;"><span style="font-size:15.5px;font-weight:700;">Video Description:</span><br />' + data.items[0].snippet.description + '</p><br />');
							$('body').append('<p style="font-family:\'Open Sans\';font-weight:700;font-size:15.5px;line-height:1.7;">Download Video:</p>')
							$('body').append('<iframe src="https://www.yt-download.org/@api/button/videos/' + data.items[0].id + '" width="510px" height="100px" allowtransparency="true" scrolling="no" style="border:none"></iframe><br /><br /><br />')
							$('body').append('<p style="font-family:\'Open Sans\';font-weight:700;font-size:15.5px;line-height:1.7;">Download Audio:</p>')
							$('body').append('<iframe src="https://www.yt-download.org/@api/button/mp3/' + data.items[0].id + '" width="510px" height="100px" allowtransparency="true" scrolling="no" style="border:none"></iframe><br /><br /><br />')
							if ((i - 2) != frames.length) {
								$('body').append('<hr /><br /><br />');
							} else {
								$('body').append('<br />');
							}
							i++
						});
					}
					$('body').fadeIn(800);

				}, 800);
			}

		}
		console.log(frames);

	}
