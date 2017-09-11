# Donation Panel

Queries various data sources for lists of recent donations, to be used by Donation Panel and Donation Announcer during the AbleGamers charity tournaments.

## Settings

The mod loads canned test pages by default.  The current feed can be changed to feed for the Community AbleGamers Tournament in the settings.

## Integrations

### Sandbox Unit Menu

This mod attempts to directly load the menu from SUM (this involves a hacky timeout and really needs a proper api).

-It will attempt to identify menu codes in the comments and present those as tags on the display.
- The total code value is displayed for verification.
- If a large donation is received for a single code, it will be automatically expanded to multiple items.
- When selecting the item, each recognized code will be made current and sent to SUM for execution.
