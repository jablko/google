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
          url: $(this).attr('href'),

          // Hack to *not* set X-Requested-With header, which otherwise causes
          // cross domain requests to be "preflighted",
          // https://developer.mozilla.org/En/HTTP_access_control
          xhr: function ()
            {
              request = jQuery.ajaxSettings.xhr();
              request.setRequestHeader = function ()
                {
                };

              return request;
            } });
      });
  });
