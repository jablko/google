$(function ()
  {
    $('a[href^=http://code.google.com/p/qubit-toolkit/issues/detail?id=]').each(function ()
      {
        var a = this;

        jQuery.ajax({

          url: 'http://alloworiginproxy.appspot.com/' + $(this).attr('href'),

          success: function (data)
            {
              if (!$(a).attr('title'))
              {
                $(a).attr('title', $('#issueheader span', data).text());
              }

              if ($('#issuemeta tr:has(th:contains(Status)) td:contains(Fixed)', data))
              {
                $(a).css('text-decoration', 'line-through');
              }
            },

          // Hack to *not* set X-Requested-With header, which otherwise causes
          // cross domain requests to be "preflighted",
          // https://developer.mozilla.org/En/HTTP_access_control
          xhr: function ()
            {
              xhr = jQuery.ajaxSettings.xhr();
              xhr.setRequestHeader = function ()
                {
                };

              return xhr;
            } });
      });
  });
