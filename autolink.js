$(function ()
  {
    // Replace text node children of all elements except <textarea>s according
    // to regular expressions, http://dev.jquery.com/ticket/4361
    $(':not(textarea)')
      .contents()
      .filter(function ()
        {
          return 3 == this.nodeType;
        })
      .each(function ()
        {
          $(this).replaceWith(this.nodeValue
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\br(\d+)\b/g, '<a class="external text" href="http://code.google.com/p/qubit-toolkit/source/detail?r=$1">$&</a>')
            .replace(/\b(?:commit|revision)s?\s+#?\d+(?:,?\s+(?:(?:&|and)\s+)?#?\d+)+\b/gi, function ($0)
              {
                return $0.replace(/#?(\d+)/gi, '<a class="external text" href="http://code.google.com/p/qubit-toolkit/source/detail?r=$1">$&</a>');
              })
            .replace(/\b(?:commit|revision)\s+#?(\d+)\b/gi, '<a class="external text" href="http://code.google.com/p/qubit-toolkit/source/detail?r=$1">$&</a>')
            .replace(/\b(?:issue|bug)s?\s+#?\d+(?:,?\s+(?:(?:&|and)\s+)?#?\d+)+\b/gi, function ($0)
              {
                return $0.replace(/#?(\d+)/gi, '<a class="external text" href="http://code.google.com/p/qubit-toolkit/issues/detail?id=$1">$&</a>');
              })
            .replace(/\b(?:issue|bug)\s+#?(\d+)\b/gi, '<a class="external text" href="http://code.google.com/p/qubit-toolkit/issues/detail?id=$1">$&</a>'));
        });
  });
