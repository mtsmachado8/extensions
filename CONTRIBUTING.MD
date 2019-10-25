# Contributing to extensions
Thanks for contributing to **extensions**!

As a contributor, here are the guidelines we would like you to follow:
- [Valid commit message(s)](#commit-message-guidelines)
- Documentation for new features
- Updated documentation for modified features

### Commit message guidelines

#### Atomic commits

If possible, make [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit)

Each commit message consists of a **header**, a optional **body** and a optional **footer**.

The header has a special format that includes a **type**, a optional **scope** and a **description**:
```commit
type(optional scope): description
<BLANK LINE>
optional body
<BLANK LINE>
optional footer
```

The optional **footer** can contain a reference to the issue

#### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

#### Type

The type must be one of the following:

| Type         | Description                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------|
| **fix**      | Bug fixes (example scopes: gulp, broccoli, npm)         																	  |
| **ci**       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| **docs**     | Documentation only changes (example scopes: README, CONTRIBUTING)                                           |
| **feat**     | Implementation of new features to the ecosystem                                                             |
| **build**    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| **perf**     | A code change that improves performance                                                                     |
| **refactor** | A code change that changes the architecture or code but not its functionality                               |
| **style**    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| **test**     | Adding missing tests or correcting existing tests																			  |

#### Descriptiom

The description contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

#### Body
Just as in the **description**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes** or a reference to the task.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

#### Examples

```commit
`fix(extensions): send error when empty token`
```

```commit
`feat(extensions/logger): add new document parser`


Fix #42
```

```commit
perf(pencil): remove pencilWidth option`

The default pencil width of 10mm is always used for performance reasons.

BREAKING CHANGE: The pencilWidth option has been removed.
```