var site = site || {};
el.core.utils.createNamespace(site, 'enums');

site.enums.breakpoint = {

  'NARROW' : {
    'id': 'narrow',
    'maxWidth': 767
  },

  'MEDIUM' : {
    'id': 'medium',
    'maxWidth': 995
  },

  'WIDE' : {
    'id': 'wide',
    'maxWidth': Number.POSITIVE_INFINITY
  }
};

site.enums.breakpoint.ALL = [
  site.enums.breakpoint.NARROW,
  site.enums.breakpoint.MEDIUM,
  site.enums.breakpoint.WIDE
]