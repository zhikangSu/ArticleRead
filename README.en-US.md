

# DeepRead

![DeepRead promotional hero](assets/articleread-promo-hero.png)

DeepRead is a desktop application designed for in-depth paper reading. Its core feature is that every question you ask the AI is anchored to the exact excerpt of the original text you selected—unlike typical chat messages that fade away, these Q&A pairs are fixed to their corresponding locations in the text. Additionally, it organizes your local papers by research topics and helps you trace research progress in specific areas after you finish reading, ensuring that every in-depth reading session transforms into retrievable, accumulated knowledge.

## Product Features

### Local Paper Library

- Import and manage local PDFs, and automatically extract metadata such as title, authors, and publication date for arXiv papers.
- Track reading progress with "Reading" and "Completed" statuses, and support manual correction of publication dates and adjustments to paper card sizes.
- Organize papers by research topics, with drag-and-drop support for card management.

### In-Depth Paper Reading

- Read original PDFs, translated PDFs, or use split-screen mode for side-by-side comparison directly within the app.
- Automatic translation is triggered upon text selection.
- Initiate AI questions directly from selected text. Question cards can be dragged and resized, and they automatically position themselves in available page whitespace.
- Each AI question is linked to its corresponding original text excerpt, and supports follow-up questions on the same content.

### Reading Review & Knowledge Archiving

- Summarize reading pace and topic distribution, allowing you to review paper reading history over 1, 3, 6, or 12-month periods.
- Use AI to reflect on and summarize reading records, helping to outline phased research progress.
- Archive paper details, Q&A, and reading insights into your personal knowledge base via Notion integration.

## Download Process

### 1. Preparation Before Use

AI Q&A calls tools already installed and logged in on your local machine. Prepare at least one of the following before use:

- Claude Code: Install and log in. You can verify it in the terminal using `claude --version`.
- Codex: Windows users can install and log in to the Codex Desktop App, or install and log in to the Codex CLI separately. DeepRead will automatically detect `codex.exe` bundled with the Codex App. Therefore, even if you only install the Codex App and cannot directly run `codex` in CMD/PowerShell, DeepRead should still work normally; please rely on the engine status displayed on the DeepRead settings page.

DeepRead does not bundle Claude Code or Codex accounts/subscriptions; it uses your own locally installed and logged-in status. Please restart DeepRead after installing or re-logging into these tools.

When using third-party APIs or compatible services for Claude Code, you still need to install the official Claude Code CLI; a successful API configuration does not mean the CLI is installed. Windows users can run `where.exe claude` and `claude --version` in CMD for troubleshooting. Windows version 0.1.22 has fixed an issue where the new npm installation method fails to recognize `claude.cmd` pointing to the native `claude.exe` within the package.

### 2. Download the Application

The latest Windows version is **0.1.22**. Please visit the [v0.1.22 Releases page](https://github.com/zhikangSu/DeepRead/releases/tag/v0.1.22) to download. macOS and Linux currently use [v0.1.21](https://github.com/zhikangSu/DeepRead/releases/tag/v0.1.21).

| System | Architecture | Recommended Installer |
| --- | --- | --- |
| Windows | x64 (verified on Windows 11) | `DeepRead-0.1.22-windows-x64.exe` |
| macOS | Apple Silicon / arm64 | `DeepRead-0.1.21-arm64.dmg` |
| Linux | x64 / amd64 | `articleread-linux-desktop_0.1.21_amd64.deb` |

A portable `DeepRead-0.1.22-windows-x64.zip` archive is also provided for Windows. The `.exe` installer is recommended for most users. The ZIP file must be fully extracted before running. User data remains in the system user directory, so it is not a true portable mode where data moves with the application.

### 3. Installation

#### Windows

1. Download `DeepRead-0.1.22-windows-x64.exe` and verify its SHA256 checksum against the value shown on the Release page.
2. The current Windows installer is not code-signed, so your browser or Microsoft Defender SmartScreen may flag it as uncommon or from an unknown publisher. Please confirm the file originates from the official Release page of this repository:
   - If the browser blocks the download, choose "Keep" or "Keep anyway".
   - If you see "Windows protected your PC" when running the installer, click "More info", then select "Run anyway".
   - There is no need to disable Defender or lower system security settings.
3. Follow the installer wizard to select the installation path and complete the installation. The installer installs for the current user by default.

DeepRead automatically checks common npm, pnpm, WindowsApps, and Codex App installation directories and directly launches the found Claude/Codex programs, without relying on CMD or PowerShell to assemble user prompts. If the settings page fails to detect the engine, please verify that the corresponding tool is logged in, then restart DeepRead.

The standard Windows installer includes TinyTeX, ctex, and Fandol for generating translated PDFs, so installing TeX separately is unnecessary. Generating translated PDFs still requires the paper to have available LaTeX source code. Papers using custom fonts, private, or non-standard packages may fail to compile, but this will not affect paper import, reading, annotation, or AI Q&A.

To maintain compatibility with the older ArticleRead, application configuration, default paper data, and runtime caches continue to use `%APPDATA%\ArticleRead`. If you selected a different data directory on first launch, papers and annotations will be saved in that location, but the directory pointer remains recorded in `%APPDATA%\ArticleRead`. Overwriting or upgrading will continue to use the original data.

Uninstalling DeepRead via "Settings → Apps → Installed Apps" will not delete `%APPDATA%\ArticleRead` or any custom data directories you selected. To completely clear data, please back it up first, then manually delete the corresponding directories.

#### macOS

1. Open the downloaded `DeepRead-0.1.21-arm64.dmg`.
2. Drag `DeepRead.app` into the `/Applications` folder.
3. Open DeepRead from the "Applications" folder.

If macOS prompts "File is damaged" or "Cannot be opened" upon first launch, run the following in Terminal:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/DeepRead.app"
```

After the command completes, reopen DeepRead.

#### Linux

Using the deb installer:

```bash
sudo dpkg -i articleread-linux-desktop_0.1.21_amd64.deb
```

If you prefer not to install the deb package, you can download `DeepRead-0.1.21.AppImage` from the same Releases page and run it directly:

```bash
chmod +x DeepRead-0.1.21.AppImage
./DeepRead-0.1.21.AppImage
```

### 4. First Launch

1. Complete the basic setup following the first-launch guide.
2. Select your installed and logged-in Claude Code or Codex CLI in Settings.
3. If you wish to use Notion archiving, complete the Notion authorization in Settings.
4. Import local PDFs or add arXiv papers to start reading.

### 5. Application Updates

macOS and Linux have supported in-app updates using a compatible kernel since v0.1.13. Windows v0.1.22 currently only uses the Windows kernel built into the installer and does not yet support in-app kernel hot updates; Windows users upgrading should download the new complete `.exe` installer and overwrite the installation. The original ArticleRead data directory will be preserved.

If you encounter any issues with installation, reading, Q&A, or Notion integration, please feel free to report them via [GitHub Issues](https://github.com/zhikangSu/DeepRead/issues).
