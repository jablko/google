$(document).ready(function ()
  {
    $('a[href^=http://code.google.com/p/qubit-toolkit/issues/detail?id=]').each(function ()
      {
        var anchor = this;

        jQuery.ajax({
          success: function (data)
            {
              if (!$(anchor).attr('title'))
              {
                $(anchor).attr('title', $('#issueheader span', data).text());
              }

              if ($('#issuemeta tr:has(th:contains(Status)) td:contains(Fixed)', data))
              {
                $(anchor).css('text-decoration', 'line-through');
              }
            },
          url: $(this).attr('href') });
      });
  });
