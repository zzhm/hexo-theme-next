{{ open_graph() }}

{%- if theme.rss === '' and config.feed and config.feed.path %}
  {%- set theme.rss = config.feed.path %}
{%- endif %}
{%- if theme.rss %}
  <link rel="alternate" href="{{ url_for(theme.rss) }}" title="{{ title }}" type="application/atom+xml">
{%- endif %}

{{ canonical() }}

{# Exports some front-matter variables to Front-End #}
<script id="page-configurations">
  // https://hexo.io/docs/variables.html
  CONFIG.page = {
    sidebar: {{ page.sidebar | json_encode }},
    isHome: {{ is_home() }},
    isPost: {{ is_post() }},
    isPage: {{ is_page() }},
    isArchive: {{ is_archive() }}
  };
</script>
