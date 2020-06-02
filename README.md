# :eyes: glance
glance is a Chrome extension which estimates the gender breakdown in an employee list on LinkedIn.

When reviewing LinkedIn company/people pages, use this tool to scan the page and provide an estimated breakdown of gender representation.

- [Example mockup](https://drive.google.com/file/d/1JG41iUVfuIp8H1LiEZZwywroDY0X4OhD/view?usp=sharing)
- [Closeup](https://drive.google.com/file/d/1ND0rH5U0Ywx5hpH-_Xo-8lvvIalKjpkU/view?usp=sharing)

Help build glance by emailing [@thesarahcassidy](https://github.com/thesarahcassidy)

## Development setup

To install the extension from the source code:

1. [Clone or download the GitHub repository][1]
2. In Google Chrome, navigate to `chrome://extensions`
3. Turn on the _developer mode_ switch.
4. Click the _load unpacked_ button.
5. Select the `glance/src` directory.

After making changes to the code:

1. In Google Chrome, navigate to `chrome://extensions`
2. Click the _reload_ icon in the _glance_ card.

[1]: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

## Disclaimer, in the words of @georgebrock

> Gender identity is a complex and multifaceted thing -- certainly far more complex than checking a name against a list. The goal of this code is not to make accurate assertions about any individual's gender, but instead to provide a rough guess at the aggregate gender breakdown of the people working at a given company.
> 
> In addition, this prototype makes the very English-language-centric assumption that names can be broken down on spaces, and the first part is the person's given name.
