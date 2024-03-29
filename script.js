$('#fileTree').jstree({
    'core' : {
      "multiple": false,
        'data' : [
            {
              "text" : "www",
              "state" : {"opened" : true },
              "children" : [
                {
                  "id": "www/about",
                  "text" : "about",
                  "icon": "jstree-folder"
                },
                {
                  "id": "www/en",
                  "text" : "en",
                  "icon": "jstree-folder"
                },
                {
                  "id": "www/index.html",
                  "text": "index.html",
                  "icon": "jstree-file"
                },
                {
                  "id": "www/privacy",
                  "text": "privacy",
                  "icon": "jstree-file"
                },
                {
                  "id": "www/robots",
                  "text": "robots.txt",
                  "icon": "jstree-file"
                },
                {
                  "id": "www/terms_of_use",
                  "text": "terms_of_use",
                  "icon": "jstree-file"
                }
            ]
            },
        ]
    }
});

$('#fileTree').on("changed.jstree", function (e, data) {
  // if (data.node.children.length > 0) {
  if (data.selected.length > 0) {
    console.log(data.selected);
  }
  // }
});

$('#fileTree').on('select_node.jstree', function (e, data) {
  if (data.node.children.length > 0) {
    $(this).jstree(true).deselect_node(data.node);
    $(this).jstree(true).toggle_node(data.node);
  }
});

$('#fileTree').on("changed.jstree", function (e, data) {
  if (e.type="changed"){
      console.log(data.selected);
      if (0 in data.selected) {
        fileId = data.selected[0]

        console.log(fileId)
        if (fileId == "www/robots"){
          editor.setValue($('#doc-robot').text())
          editor.gotoLine(1, 1)
        }
        else if (fileId == "www/index.html"){
          editor.setValue($('#doc-index').text())
          editor.gotoLine(1, 1)
        }
        else if (fileId == "www/privacy"){
          editor.setValue($('#doc-privacy').text())
          editor.gotoLine(1, 1)
        }
        else if (fileId == "www/terms_of_use"){
          editor.setValue($('#doc-terms_of_use').text())
          editor.gotoLine(1, 1)
        }

      }
  }
});

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

$( "#btn-code" ).click(function() {
  code = document.getElementById('code-ide')

  if (code.style.visibility=='visible' || code.style.visibility=='')
    code.style.visibility = "hidden"
  else if (code.style.visibility=='hidden')
    code.style.visibility = "visible"



});
