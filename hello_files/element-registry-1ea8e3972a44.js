"use strict";(()=>{var u=Object.defineProperty;var m=(e,a)=>u(e,"name",{value:a,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["element-registry"],{92333:(e,a,s)=>{const d=new Map,j=new Promise(n=>{document.readyState==="interactive"||document.readyState==="complete"?n():document.addEventListener("DOMContentLoaded",()=>n(),{once:!0})}),p=new Promise(n=>{const o=m(()=>{n(),document.removeEventListener("click",o),document.removeEventListener("touchstart",o),document.removeEventListener("keydown",o)},"handler");document.addEventListener("click",o),document.addEventListener("touchstart",o,{passive:!0}),document.addEventListener("keydown",o)}),i={ready:j,firstInteraction:p},h=new WeakMap;function g(n=document.body){cancelAnimationFrame(h.get(n)||0),h.set(n,requestAnimationFrame(()=>{for(const o of d.keys()){const l=n.matches(o)?n:n.querySelector(o);if(customElements.get(o)||l){const f=l?.getAttribute("data-load-on")||"ready",x=f in i?i[f]:i.ready;for(const c of d.get(o)||[])x.then(c);d.delete(o),h.delete(n)}}}))}m(g,"scan"),new MutationObserver(n=>{if(!!d.size)for(const o of n)for(const l of o.addedNodes)l instanceof Element&&g(l)}).observe(document,{subtree:!0,childList:!0});let v=!0;function t(n,o){d.has(n)||d.set(n,[]),d.get(n).push(o),v&&g(document.body),v=!1}m(t,"whenSeen"),t("animated-image",()=>s.e("app_components_accessibility_animated-image-element_ts").then(s.bind(s,1711))),t("launch-code",()=>s.e("app_components_account_verifications_launch-code-element_ts").then(s.bind(s,33954))),t("metric-selection",()=>s.e("app_components_advisories_metric-selection-element_ts").then(s.bind(s,63887))),t("severity-calculator",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("app_components_advisories_severity-calculator-element_ts")]).then(s.bind(s,606))),t("downgrade-dialog",()=>Promise.all([s.e("vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-16f3e14"),s.e("app_components_billing_settings_downgrade-dialog-element_ts")]).then(s.bind(s,74112))),t("downgrade-survey-dialog",()=>s.e("app_components_billing_settings_downgrade-survey-dialog-element_ts").then(s.bind(s,37859))),t("create-branch",()=>Promise.all([s.e("vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js"),s.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-57c13e2"),s.e("app_components_branch_create-branch-element_ts")]).then(s.bind(s,78928))),t("alert-dismissal-details",()=>s.e("app_components_code_scanning_alert-dismissal-details-element_ts").then(s.bind(s,32445))),t("sku-list",()=>s.e("app_components_codespaces_advanced_options_sku-list-element_ts").then(s.bind(s,14067))),t("create-button",()=>s.e("app_components_codespaces_create-button-element_ts").then(s.bind(s,1834))),t("command-palette-page",()=>Promise.all([s.e("vendors-node_modules_fzy_js_index_js-node_modules_github_catalyst_lib_index_js"),s.e("vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-4090c9"),s.e("app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd"),s.e("app_components_command_palette_command-palette-page-element_ts")]).then(s.bind(s,33094))),t("command-palette-page-stack",()=>Promise.all([s.e("vendors-node_modules_fzy_js_index_js-node_modules_github_catalyst_lib_index_js"),s.e("vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-4090c9"),s.e("app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd"),s.e("app_components_command_palette_command-palette-page-stack-element_ts")]).then(s.bind(s,9222))),t("query-search",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("vendors-node_modules_lit-html_lit-html_js"),s.e("vendors-node_modules_lit-html_directives_until_js-node_modules_github_catalyst_lib_index_js-n-0b48d4"),s.e("app_assets_modules_github_form_ts-app_assets_modules_github_navigation_ts"),s.e("app_assets_modules_github_dashboard_shortcuts_ts"),s.e("app_components_dashboard_query-search-element_ts")]).then(s.bind(s,30378))),t("deferred-diff-lines",()=>s.e("app_components_diffs_deferred-diff-lines-element_ts").then(s.bind(s,51598))),t("readme-toc",()=>s.e("app_components_files_readme-toc-element_ts").then(s.bind(s,11423))),t("delayed-loading",()=>s.e("app_components_github_delayed-loading-element_ts").then(s.bind(s,58525))),t("feature-callout",()=>s.e("app_components_github_feature-callout-element_ts").then(s.bind(s,89434))),t("reopen-button",()=>s.e("app_components_issues_reopen-button-element_ts").then(s.bind(s,67195))),t("math-renderer",()=>Promise.all([s.e("vendors-node_modules_lit-html_lit-html_js"),s.e("app_components_mathjax_math-renderer-element_ts")]).then(s.bind(s,24561))),t("allowed-values-input",()=>s.e("app_components_organizations_settings_codespaces_policy_form_constraint_row_allowed-values-in-672002").then(s.bind(s,97147))),t("max-value",()=>s.e("app_components_organizations_settings_codespaces_policy_form_constraint_row_max-value-element_ts").then(s.bind(s,43893))),t("codespaces-policy-form",()=>s.e("app_components_organizations_settings_codespaces-policy-form-element_ts").then(s.bind(s,97718))),t("insights-form",()=>s.e("app_components_organizations_settings_features_insights-form-element_ts").then(s.bind(s,17764))),t("action-list",()=>Promise.all([s.e("vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js"),s.e("app_components_primer_action_list_action-list-element_ts")]).then(s.bind(s,51126))),t("action-menu",()=>s.e("app_components_primer_action_menu_action-menu-element_ts").then(s.bind(s,59086))),t("split-page-layout",()=>s.e("app_components_primer_experimental_split-page-layout-element_ts").then(s.bind(s,17297))),t("toggle-switch",()=>s.e("app_components_primer_experimental_toggle-switch-element_ts").then(s.bind(s,15004))),t("iterate-focusable-elements.ts",()=>s.e("app_components_primer_modal_dialog_iterate-focusable-elements_ts").then(s.bind(s,23349))),t("modal-dialog",()=>s.e("app_components_primer_modal_dialog_modal-dialog-element_ts").then(s.bind(s,27257))),t("file-filter",()=>s.e("app_components_pull_requests_file_tree_file-filter-element_ts").then(s.bind(s,44846))),t("file-tree",()=>s.e("app_components_pull_requests_file_tree_file-tree-element_ts").then(s.bind(s,62978))),t("file-tree-toggle",()=>s.e("app_components_pull_requests_file_tree_file-tree-toggle-element_ts").then(s.bind(s,93559))),t("dependabot-alert-row",()=>s.e("app_components_repos_alerts_dependabot-alert-row-element_ts").then(s.bind(s,76257))),t("dependabot-alert-table-header",()=>s.e("app_components_repos_alerts_dependabot-alert-table-header-element_ts").then(s.bind(s,47691))),t("memex-project-picker",()=>s.e("app_components_repositories_memex_memex-project-picker-element_ts").then(s.bind(s,88018))),t("pin-organization-repo",()=>Promise.all([s.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe"),s.e("app_components_repositories_pin-organization-repo-element_ts")]).then(s.bind(s,77028))),t("styled-text-input",()=>s.e("app_components_search_input_styled-text-input-element_ts").then(s.bind(s,42738))),t("common.ts",()=>s.e("app_components_search_parsing_common_ts").then(s.bind(s,97597))),t("parsing.ts",()=>Promise.all([s.e("vendors-node_modules_github_blackbird-parser_dist_blackbird_js"),s.e("app_components_search_parsing_parsing_ts-_b3651")]).then(s.bind(s,23209))),t("search-input",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd"),s.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-d30067"),s.e("app_assets_modules_github_jump-to_ts"),s.e("app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64"),s.e("app_components_search_search-input-element_ts")]).then(s.bind(s,17804))),t("blackbird.ts",()=>s.e("app_components_search_suggestions_blackbird_ts").then(s.bind(s,52048))),t("custom-scopes.ts",()=>s.e("app_components_search_suggestions_custom-scopes_ts").then(s.bind(s,77717))),t("default.ts",()=>s.e("app_components_search_suggestions_default_ts").then(s.bind(s,63951))),t("fixed-qualifiers.ts",()=>s.e("app_components_search_suggestions_fixed-qualifiers_ts").then(s.bind(s,82721))),t("history.ts",()=>s.e("app_components_search_suggestions_history_ts").then(s.bind(s,86909))),t("input.ts",()=>s.e("app_components_search_suggestions_input_ts").then(s.bind(s,75493))),t("languages.ts",()=>s.e("app_components_search_suggestions_languages_ts").then(s.bind(s,47512))),t("projects.ts",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd"),s.e("app_assets_modules_github_jump-to_ts"),s.e("app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64"),s.e("node_modules_delegated-events_dist_index_js-app_components_search_suggestions_projects_ts")]).then(s.bind(s,64537))),t("repos.ts",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd"),s.e("app_assets_modules_github_jump-to_ts"),s.e("app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64"),s.e("node_modules_delegated-events_dist_index_js-app_components_search_suggestions_repos_ts")]).then(s.bind(s,4022))),t("suggestions.ts",()=>s.e("app_components_search_suggestions_suggestions_ts").then(s.bind(s,47378))),t("teams.ts",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd"),s.e("app_assets_modules_github_jump-to_ts"),s.e("app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64"),s.e("node_modules_delegated-events_dist_index_js-app_components_search_suggestions_teams_ts")]).then(s.bind(s,6379))),t("types.ts",()=>s.e("app_components_search_suggestions_types_ts").then(s.bind(s,76286))),t("project-picker",()=>Promise.all([s.e("vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js"),s.e("vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_memoize_dist_esm_index_-4f373e"),s.e("app_assets_modules_github_soft-nav_navigate_ts"),s.e("app_components_sidebar_project-picker-element_ts")]).then(s.bind(s,88175))),t("notification-indicator",()=>s.e("app_components_site_header_notification-indicator-element_ts").then(s.bind(s,71818))),t("slash-command-toolbar-button",()=>s.e("app_components_slash_commands_slash-command-toolbar-button-element_ts").then(s.bind(s,83326))),t("monthly-spend-graph",()=>Promise.all([s.e("vendors-node_modules_chart_js_dist_chart_esm_js"),s.e("app_components_sponsors_orgs_premium_dashboard_monthly-spend-graph-element_ts")]).then(s.bind(s,14676))),t("react-staffbar",()=>s.e("app_components_stafftools_react_react-staffbar-element_ts").then(s.bind(s,30318))),t("turbo-staffbar",()=>s.e("app_components_stafftools_turbo_turbo-staffbar-element_ts").then(s.bind(s,2079))),t("turbo-staffbar-preview",()=>s.e("app_components_stafftools_turbo_turbo-staffbar-preview-element_ts").then(s.bind(s,23566))),t("themed-picture",()=>s.e("app_components_themed_pictures_themed-picture-element_ts").then(s.bind(s,73422))),t("tracking-block-api.ts",()=>s.e("app_components_tracking_blocks_tracking-block-api_ts").then(s.bind(s,28825))),t("tracking-block",()=>Promise.all([s.e("app_components_tracking_blocks_tracking-block-api_ts"),s.e("app_components_tracking_blocks_tracking-block-element_ts")]).then(s.bind(s,38373))),t("tracking-block-omnibar",()=>s.e("app_components_tracking_blocks_tracking-block-omnibar-element_ts").then(s.bind(s,76829))),t("profile-pins",()=>Promise.all([s.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe"),s.e("app_assets_modules_github_profile_profile-pins-element_ts")]).then(s.bind(s,9473))),t("emoji-picker",()=>s.e("app_assets_modules_github_emoji-picker-element_ts").then(s.bind(s,62993))),t("edit-hook-secret",()=>s.e("app_assets_modules_github_behaviors_edit-hook-secret-element_ts").then(s.bind(s,1665))),t("insights-query",()=>s.e("app_assets_modules_github_insights_insights-query_ts").then(s.bind(s,31417))),t("remote-clipboard-copy",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("app_assets_modules_github_behaviors_remote-clipboard-copy_ts")]).then(s.bind(s,53287))),t("series-table",()=>s.e("app_assets_modules_github_insights_series-table_ts").then(s.bind(s,82100))),t("line-chart",()=>Promise.all([s.e("vendors-node_modules_chart_js_dist_chart_esm_js"),s.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),s.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),s.e("app_assets_modules_github_insights_line-chart_ts")]).then(s.bind(s,75689))),t("bar-chart",()=>Promise.all([s.e("vendors-node_modules_chart_js_dist_chart_esm_js"),s.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),s.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),s.e("app_assets_modules_github_insights_bar-chart_ts")]).then(s.bind(s,83515))),t("column-chart",()=>Promise.all([s.e("vendors-node_modules_chart_js_dist_chart_esm_js"),s.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),s.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),s.e("app_assets_modules_github_insights_column-chart_ts")]).then(s.bind(s,86564))),t("stacked-area-chart",()=>Promise.all([s.e("vendors-node_modules_chart_js_dist_chart_esm_js"),s.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),s.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),s.e("app_assets_modules_github_insights_stacked-area-chart_ts")]).then(s.bind(s,96514))),t("presence-avatars",()=>s.e("app_assets_modules_github_presence_presence-avatars_ts").then(s.bind(s,33096))),t("pulse-authors-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("app_assets_modules_github_graphs_pulse-authors-graph-element_ts")]).then(s.bind(s,97724))),t("stacks-input-config-view",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe"),s.e("app_assets_modules_github_stacks_stacks-input-config-view_ts")]).then(s.bind(s,97818))),t("community-contributions-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),s.e("app_assets_modules_github_graphs_community-contributions_ts")]).then(s.bind(s,14008))),t("discussion-page-views-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("app_assets_modules_github_graphs_discussion-page-views_ts")]).then(s.bind(s,16427))),t("discussions-daily-contributors",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),s.e("app_assets_modules_github_graphs_discussions-daily-contributors_ts")]).then(s.bind(s,69142))),t("discussions-new-contributors",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),s.e("app_assets_modules_github_graphs_discussions-new-contributors_ts")]).then(s.bind(s,72895))),t("code-frequency-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("app_assets_modules_github_graphs_code-frequency-graph-element_ts")]).then(s.bind(s,29728))),t("contributors-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-transition_src_index_js-node_modules_github_catalyst_lib_index_js-nod-ed7ac2"),s.e("vendors-node_modules_d3-array_src_descending_js-node_modules_d3-axis_src_axis_js-node_modules-5e7c48"),s.e("app_assets_modules_github_graphs_contributors-graph-element_ts")]).then(s.bind(s,56194))),t("org-insights-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-array_src_bisector_js-node_modules_d3-axis_src_axis_js-node_modules_d-d500b3"),s.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-57c13e1"),s.e("app_assets_modules_github_graphs_org-insights-graph-element_ts")]).then(s.bind(s,79429))),t("traffic-clones-graph",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),s.e("app_assets_modules_github_d3_tip_ts-app_assets_modules_github_fetch_ts-app_assets_modules_git-962b01"),s.e("app_assets_modules_github_graphs_traffic-clones-graph-element_ts")]).then(s.bind(s,69549))),t("traffic-visitors-graph",()=>Promise.all([s.e("vendors-node_modules_selector-observer_dist_index_esm_js"),s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),s.e("app_assets_modules_github_d3_tip_ts-app_assets_modules_github_fetch_ts-app_assets_modules_git-962b01"),s.e("app_assets_modules_github_graphs_traffic-visitors-graph-element_ts")]).then(s.bind(s,5932))),t("commit-activity-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-transition_src_index_js-node_modules_github_catalyst_lib_index_js-nod-ed7ac2"),s.e("app_assets_modules_github_graphs_commit-activity-graph-element_ts")]).then(s.bind(s,30579))),t("marketplace-insights-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),s.e("app_assets_modules_github_d3_tip_ts-app_assets_modules_github_fetch_ts-app_assets_modules_git-962b01"),s.e("app_assets_modules_github_graphs_marketplace-insights-graph-element_ts")]).then(s.bind(s,23825))),t("user-sessions-map",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_d3-transition_src_index_js-node_modules_github_catalyst_lib_index_js-nod-ed7ac2"),s.e("vendors-node_modules_d3-ease_src_circle_js-node_modules_d3-format_src_defaultLocale_js-node_m-21f734"),s.e("app_assets_modules_github_settings_user-sessions-map-element_ts")]).then(s.bind(s,75020))),t("reload-after-polling",()=>s.e("app_assets_modules_github_behaviors_reload-after-polling-element_ts").then(s.bind(s,87159))),t("package-dependencies-security-graph",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("app_assets_modules_github_graphs_package-dependencies-security-graph-element_ts")]).then(s.bind(s,69709))),t(".js-sub-dependencies",()=>s.e("app_assets_modules_github_dependencies_ts").then(s.bind(s,42221))),t("network-graph",()=>Promise.all([s.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_catalyst_lib_inde-758ef9"),s.e("app_assets_modules_github_graphs_network-graph-element_ts")]).then(s.bind(s,11507))),t("business-audit-log-map",()=>Promise.all([s.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),s.e("vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js"),s.e("vendors-node_modules_d3-transition_src_index_js-node_modules_github_catalyst_lib_index_js-nod-ed7ac2"),s.e("vendors-node_modules_d3-ease_src_circle_js-node_modules_d3-format_src_defaultLocale_js-node_m-21f734"),s.e("app_assets_modules_github_soft-nav_navigate_ts"),s.e("app_assets_modules_github_business-audit-log-map-element_ts")]).then(s.bind(s,15529))),t("inline-machine-translation",()=>s.e("app_assets_modules_github_localization_inline-machine-translation-element_ts").then(s.bind(s,96002)))}},e=>{var a=m(d=>e(e.s=d),"__webpack_exec__"),s=a(92333)}]);})();

//# sourceMappingURL=element-registry-e87852ae2409.js.map