/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2663, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3811, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4735, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5602, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6643, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7627, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8651, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_wheelsbtn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("Wheels");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_radiobtn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Radio");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mediabtn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Media");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_servicebtn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Services");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotdealbtn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Hot Deals");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contactbtn}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Contact");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Follow_Us}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://twitter.com/exclusivewhipz", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Back_Button}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Home");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'RadioAno'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9115, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("repeat");

      });
      //Edge binding end

   })("RadioAno");
   //Edge symbol end:'RadioAno'

   //=========================================================
   
   //Edge symbol: 'SociaMediaBar'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_facebook-u9888}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://www.facebook.com/pages/ATL-Custom-Auto/775720002444106", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_youtube-u6317}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://www.youtube.com/channel/UCRQ6QgJOq25ikSwDIL85law", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_instagram-u6318-r}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://instagram.com/atlcustomauto/", "_blank");
         

      });
      //Edge binding end

   })("SociaMediaBar");
   //Edge symbol end:'SociaMediaBar'

   //=========================================================
   
   //Edge symbol: 'cviewer'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var contactview = sym.$("contactview");
         contactview.html(content7);

      });
      //Edge binding end

   })("cviewer");
   //Edge symbol end:'cviewer'

   //=========================================================
   
   //Edge symbol: 'viewer1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var contact = sym.$("contact");
         var content7 = '<iframe width="480" height="671" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://www.atlcustomauto.com/mobileapp/contact-us.html"></iframe>'
         contact.html(content7);

      });
      //Edge binding end

   })("viewer1");
   //Edge symbol end:'viewer1'

   //=========================================================
   
   //Edge symbol: 'viewer2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var Mediaview = sym.$("Mediaview");
         var content7 = '<iframe width="480" height="605" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0" src="http://www.atlcustomauto.com/mobileapp/index.html" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%;"></iframe>'
         Mediaview.html(content7);
         

      });
      //Edge binding end

   })("viewer2");
   //Edge symbol end:'viewer2'

   //=========================================================
   
   //Edge symbol: 'viewer3'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var wheels = sym.$("wheels");
         var content9 = '<iframe width="480" height="673" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://www.atlcustomauto.com/mobileapp/Wheels.html"></iframe>'
         wheels.html(content9);

      });
      //Edge binding end

   })("viewer3");
   //Edge symbol end:'viewer3'

   //=========================================================
   
   //Edge symbol: 'viewer4'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var radio = sym.$("radio");
         var content10 = '<iframe width="480" height="671" frameborder="0" scrolling="no" align="center" marginheight="0" marginwidth="0"src="http://www.atlcustomauto.com/mobileapp/radio.html"></iframe>'
         radio.html(content10);

      });
      //Edge binding end

   })("viewer4");
   //Edge symbol end:'viewer4'

   //=========================================================
   
   //Edge symbol: 'viewer5'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var deals = sym.$("deals");
         var content11 = '<iframe width="480" height="671" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://atlcustomdealsalesinventoryview.blogspot.com/"></iframe>'
         deals.html(content11);

      });
      //Edge binding end

   })("viewer5");
   //Edge symbol end:'viewer5'

   //=========================================================
   
   //Edge symbol: 'viewer6'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var slideholder = sym.$("slideholder");
         var content12 = '<iframe width="505" height="313" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"src="http://www.atlcustomauto.com/atlmobileslides/index.html"></iframe>'
         slideholder.html(content12);

      });
      //Edge binding end

   })("viewer6");
   //Edge symbol end:'viewer6'

})(jQuery, AdobeEdge, "EDGE-300494261");