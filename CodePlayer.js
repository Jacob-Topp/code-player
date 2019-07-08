var windowHeight = $(window).height();
			
			var topBarHeight = $("#topBar").height();
			
			var codeHeaderHeight = $(".codeHeader").height();

			// Code container height calculation
			var codeContainerHeight = windowHeight - topBarHeight - 20;
			$(".codeContainer").height(codeContainerHeight + "px");
			
			// Code input height calculation
			var codeInputHeight = codeContainerHeight - codeHeaderHeight - 16;
			$(".codeInput").height(codeInputHeight + "px");
			
			// Automatically updating container and input heights on window resize
			$(window).resize(function(){
			  
				var windowHeight = $(window).height();
			
				var topBarHeight = $("#topBar").height();
			  
				var codeHeaderHeight = $(".codeHeader").height();
			  
				var codeContainerHeight = windowHeight - topBarHeight - 20;
			  
				var codeInputHeight = codeContainerHeight - codeHeaderHeight - 16;
			  
				$(".codeInput").height(codeInputHeight + "px");
				
				$(".codeContainer").height(codeContainerHeight + "px");
			  
			});
			
			// Updating output display in real time
			$("body").on("keyup mouseup change",function() {
			
				// Display HTML and CSS in output
				$("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());

				// Run javascript code in output
				document.getElementById("outputCode").contentWindow.eval($("#javascriptCode").val());
				
			});
			
			// Toggling HTML, CSS, JS and Output
			$(".toggleButton").click (function() {
				
				if ($(this).is("#htmlToggle")) {
					
					$("#htmlContainer").toggleClass("display");
					
				} else if ($(this).is("#cssToggle")) {
					
					$("#cssContainer").toggleClass("display");
					
				} else if ($(this).is("#javascriptToggle")) {
					
					$("#javascriptContainer").toggleClass("display");
					
				} else if ($(this).is("#outputToggle")) {
					
					$("#outputContainer").toggleClass("display");
					
				}
				
				// Adjusting width of visible containers to fill page
				var visibleCode = $(".codeContainer").filter(function() {
					
					return ($(this).css("display") != "none");
					
					}).length;

				var width = (100 / visibleCode) + "%";

				$(".codeContainer").css("width", width);

				$(".codeContainer:visible:last").css("borderRight", "none");

				$(".codeContainer:visible:not(:last)").css("borderRight", "2px solid #e5e3e3");

				
			});