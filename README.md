# ArticleRead

![ArticleRead promotional hero](assets/articleread-promo-hero.png)

ArticleRead 是一个面向论文精读的桌面应用。它把本地论文阅读、划词提问、批注、译文 PDF 生成和 Notion 归档放进同一个工作流里，适合需要高频阅读 arXiv / PDF 论文的研究者、工程师和学生。

当前公开预览版支持 Apple Silicon Mac 和 x64 Linux。

## 下载

- 最新版本：ArticleRead 0.1.13（macOS 与 Linux 同步发布）
- **从 0.1.13 起支持应用内更新**:大多数后续版本无需重新下载安装包,设置页一键完成(~4MB)
- macOS：Apple Silicon / arm64，从 [v0.1.13](https://github.com/zhikangSu/ArticleRead/releases/tag/v0.1.13) 下载 `ArticleRead-0.1.13-arm64.dmg`
- Linux：x64，从 [v0.1.13](https://github.com/zhikangSu/ArticleRead/releases/tag/v0.1.13) 下载 `articleread-linux-desktop_0.1.13_amd64.deb` 或 `ArticleRead-0.1.13.AppImage`
- SHA256（0.1.13 macOS）：
  - DMG：`06c42a80e0a50b8ebc11022af26db1edd5c5694bca73313e8241faaa510f5f3b`
  - macOS ZIP：`be0a378723db65a301e9a084da07cbe4ca709882b79569276fc41cd2fdb88131`
- SHA256（0.1.13 Linux）：
  - AppImage：`2cceed0b90aab5b45fd3130ea52ed484f688cf29eaa662cfb10f3e5971470075`
  - deb：`acdb8c58d3c2822439190ef791cfd7bad21d40f014380b096610f351c62ca006`

> ⚠️ v0.1.10 存在启动即崩的缺陷（`buildAppMenu is not defined`），已下架为 pre-release，请勿使用。

### 0.1.13 亮点

- **应用内更新(内核热更新)**:启动静默检查,设置页一键下载 ~4MB 内核包重启生效;失败自动回退
- 拖选即自动翻译,浮层不再遮挡原文;顶栏一键标记「已读完」
- 修复同页高亮重复渲染;纯高亮选色立即上色

### 0.1.12 亮点

- PDF 应用内查找(⌘F / Ctrl+F):全文检索整本 PDF,命中计数、跳转定位、文中着色;原文/译文/分屏均可用
- 修复 AI 回答中 `\[...\]` / `\(...\)` 公式显示为裸文本的问题(存量消息同样生效)

### 0.1.10–0.1.11 亮点

- 划词工具条重做：解释 / 翻译 / 批注 / 提问 一键直达;翻译即划即得(Google 翻译,不耗 AI 额度)
- 高亮与提问分离：五色高亮由你主动圈选、悬停换色;提问位置用灰色短划线标记
- 研究者画像：AI 提炼你的研究方向与阅读习惯,注入每篇论文的问答,回答更贴合背景(全本机)
- 阅读回顾：AI 反思 + 阅读节奏 + 主题分布,支持 1/3/6/12 个月
- 修复应用内复制(Cmd+C);简报不再出现过程叙述;译文 PDF 缺宏包自动补装

## 你可以用它做什么

- 在本地阅读 PDF 论文，并围绕原文进行精读。
- 选中文本后快速提问、解释、记录手动批注。
- 为论文生成译文 PDF，方便中文语境下快速通读。
- 通过 Notion 集成把阅读成果归档到自己的知识库。
- 使用你本机已有的 Claude Code 或 Codex CLI 订阅能力，不把论文内容上传到额外的托管服务。

## 安装

macOS：

1. 从 Releases 下载 `ArticleRead-0.1.13-arm64.dmg`。
2. 打开 DMG，把 `ArticleRead.app` 拖到 `/Applications`。
3. 第一次打开时，如果 macOS 提示“文件已损坏”或“无法打开”，在终端运行：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/ArticleRead.app"
```

然后重新打开 `ArticleRead.app`。

Linux：

```bash
sudo dpkg -i articleread-linux-desktop_0.1.13_amd64.deb
```

也可以直接运行 AppImage：

```bash
chmod +x ArticleRead-0.1.13.AppImage
./ArticleRead-0.1.13.AppImage
```

## 使用前准备

ArticleRead 桌面版自带应用运行环境和译文 PDF 所需的 TeX 运行时。AI 问答能力会调用你本机已经安装和登录的命令行工具：

- Claude Code：`claude`
- Codex CLI：`codex`

如果你需要 Notion 归档，请在 App 内进入设置并完成 Notion 授权。

## 当前状态

这是 ArticleRead 的公开预览发布仓，用于分发可体验的桌面安装包和介绍产品能力。核心产品仍在快速迭代，欢迎通过 Issues 反馈安装、阅读、问答或 Notion 集成中的问题。
