$(function() {
  function indentation(s) { for (var i = 0; i < s.length; i++) { if (s[i] != ' ') return s.slice(0,i) } return "" }
  function removeIndent(s) {
    var indent = indentation(s)
    var firstLine = new RegExp("^" + indent)
    var otherLines = new RegExp("\n" + indent, "g")
    return s.replace(firstLine, "").replace(otherLines, "\n")
  }
  $("script[language=roy]").each(function(i, scriptTag) {
    var element = $(scriptTag)
    var url = element.attr("src")
    if (url) {
      console.log("src attribute not supported yet")
    } else {
      roySrc = removeIndent(element.html().replace(/^\s*\n/g, ""))
      eval(roy.compile(roySrc).output, {}, {}, {nodejs:true})
    }
  })
})

