# DeepRead

![DeepRead promotional hero](assets/articleread-promo-hero.png)

DeepRead 是一款面向论文精读的桌面应用。核心在于：你向 AI 提出的每个问题，都锚定在当时划选的那段原文上——问答不会像普通聊天一样转瞬即逝，而是钉在原文的对应位置。除此之外，它还能把本地论文按研究主题整理，并在读完后通过阅读回顾帮你梳理某个方向的研究进展，让每一次精读都沉淀成可回溯的知识。

## 产品功能

### 本地论文库

- 导入和管理本地 PDF，并识别 arXiv 论文的标题、作者、发表日期等元数据。
- 通过“阅读中”和“已读完”状态跟踪阅读进度，支持手动修正发表日期和调整论文卡片大小。
- 按研究主题组织论文，并可拖拽论文卡片进行整理。

### 论文精读

- 在应用内阅读原文 PDF、译文 PDF，或使用分屏模式对照阅读。
- 选中文本后自动翻译。
- 从选区直接发起 AI 提问，提问卡片可拖动、缩放，并会根据页面留白自动选择合适位置。
- 每个 AI 提问都与对应的原文选区关联，并支持围绕同一内容继续追问。

### 阅读回顾与知识归档

- 汇总阅读节奏和主题分布，按 1、3、6 或 12 个月回顾论文阅读情况。
- 使用 AI 对阅读记录进行反思和总结，帮助梳理阶段性研究脉络。
- 通过 Notion 集成将论文信息、问答和阅读成果归档到个人知识库。

## 下载流程

### 1. 使用前准备

AI 问答会调用你本机已经安装并登录的工具。使用前请至少准备其中一种：

- Claude Code：安装并完成登录，可在终端中用 `claude --version` 检查。
- Codex：Windows 用户可以安装并登录 Codex 桌面 App，或单独安装并登录 Codex CLI。DeepRead 会自动发现 Codex App 随附的 `codex.exe`，因此只安装 Codex App 时，即使 CMD/PowerShell 中无法直接运行 `codex`，DeepRead 仍可能正常使用；请以 DeepRead 设置页显示的引擎状态为准。

DeepRead 不内置 Claude Code、Codex 账号或订阅，使用的是你自己的本机安装和登录状态。新安装或重新登录工具后，请重启 DeepRead。

### 2. 下载应用

最新版本为 **0.1.21**，请前往 [v0.1.21 Releases 页面](https://github.com/zhikangSu/DeepRead/releases/tag/v0.1.21) 下载与你的系统对应的安装包。

| 系统 | 架构 | 推荐安装包 |
| --- | --- | --- |
| Windows | x64（已在 Windows 11 验证） | `DeepRead-0.1.21-windows-x64.exe` |
| macOS | Apple Silicon / arm64 | `DeepRead-0.1.21-arm64.dmg` |
| Linux | x64 / amd64 | `articleread-linux-desktop_0.1.21_amd64.deb` |

Windows 同时提供 `DeepRead-0.1.21-windows-x64.zip` 免安装压缩包。一般用户推荐使用 `.exe` 安装器；ZIP 必须完整解压后再运行，其中的用户数据仍保存在系统用户目录，并不属于“数据随程序移动”的便携模式。

### 3. 安装

#### Windows

1. 下载 `DeepRead-0.1.21-windows-x64.exe`，并对照 Release 页面显示的 SHA256 校验值。
2. 当前 Windows 安装包尚未进行代码签名，因此浏览器或 Microsoft Defender SmartScreen 可能提示该文件不常下载或发布者未知。请确认文件来自本仓库的官方 Release 页面：
   - 浏览器拦截下载时，选择“保留”或“仍然保留”。
   - 运行安装器出现“Windows 已保护你的电脑”时，点击“更多信息”，再选择“仍要运行”。
   - 无需关闭 Defender 或降低系统安全设置。
3. 按安装向导选择安装位置并完成安装。该安装器默认按当前用户安装。

DeepRead 会自动检查常见的 npm、pnpm、WindowsApps 以及 Codex App 安装目录，并直接启动找到的 Claude/Codex 程序，不依赖 CMD 或 PowerShell 拼接用户问题。若设置页未识别到引擎，请先确认相应工具已登录，再重启 DeepRead。

Windows 标准安装包已内置用于译文 PDF 生成的 TinyTeX、ctex 和 Fandol，无需另行安装 TeX。译文 PDF 仍要求论文具有可用的 LaTeX 源码；使用自定义字体、私有或非常规宏包的论文可能无法编译，但不会影响论文导入、阅读、标注和 AI 问答。

为兼容旧版 ArticleRead，应用配置、默认论文数据及运行缓存继续使用 `%APPDATA%\ArticleRead`。如果首次启动时选择了其他数据目录，论文和标注会保存在所选位置，目录指针仍记录在 `%APPDATA%\ArticleRead`。覆盖安装或升级会继续使用原有数据。

从“设置 → 应用 → 已安装的应用”卸载 DeepRead 不会删除 `%APPDATA%\ArticleRead` 或你另行选择的数据目录。需要彻底清除数据时，请先备份，再手动删除相应目录。

#### macOS

1. 打开下载的 `DeepRead-0.1.21-arm64.dmg`。
2. 将 `DeepRead.app` 拖入 `/Applications` 文件夹。
3. 从“应用程序”中打开 DeepRead。

如果首次打开时 macOS 提示“文件已损坏”或“无法打开”，请在终端中运行：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/DeepRead.app"
```

命令执行完成后，重新打开 DeepRead。

#### Linux

使用 deb 安装包：

```bash
sudo dpkg -i articleread-linux-desktop_0.1.21_amd64.deb
```

如果不想安装 deb 包，可以在同一 Releases 页面下载 `DeepRead-0.1.21.AppImage` 并直接运行：

```bash
chmod +x DeepRead-0.1.21.AppImage
./DeepRead-0.1.21.AppImage
```

### 4. 首次启动

1. 按照首次启动引导完成基础配置。
2. 在设置中选择已安装并登录的 Claude Code 或 Codex CLI。
3. 如需使用 Notion 归档，在设置中完成 Notion 授权。
4. 导入本地 PDF 或添加 arXiv 论文，开始阅读。

### 5. 应用更新

macOS 与 Linux 从 0.1.13 起支持兼容内核的应用内更新。Windows 0.1.21 当前只使用安装包内置的 Windows 内核，暂不接受应用内内核热更新；Windows 用户升级时请下载新的完整 `.exe` 安装包并覆盖安装，原有 ArticleRead 数据目录会继续保留。

如遇到安装、阅读、问答或 Notion 集成问题，欢迎通过 [GitHub Issues](https://github.com/zhikangSu/DeepRead/issues) 反馈。
