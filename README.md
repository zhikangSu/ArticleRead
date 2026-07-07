# ArticleRead

![ArticleRead promotional hero](assets/articleread-promo-hero.png)

ArticleRead 是一个面向论文精读的 macOS 桌面应用。它把本地论文阅读、划词提问、批注、译文 PDF 生成和 Notion 归档放进同一个工作流里，适合需要高频阅读 arXiv / PDF 论文的研究者、工程师和学生。

当前公开预览版面向 Apple Silicon Mac，下载 DMG 后即可安装体验。

## 下载

- 最新版本：ArticleRead 0.1.3
- macOS：Apple Silicon / arm64
- 安装包：请到 [Releases](https://github.com/zhikangSu/ArticleRead/releases) 下载 `ArticleRead-0.1.3-arm64.dmg`
- SHA256：`7548b24002f17766611fe63ba2ae1bd8207a92a58a3b70b3b734b59140fb13f0`

## 你可以用它做什么

- 在本地阅读 PDF 论文，并围绕原文进行精读。
- 选中文本后快速提问、解释、记录手动批注。
- 为论文生成译文 PDF，方便中文语境下快速通读。
- 通过 Notion 集成把阅读成果归档到自己的知识库。
- 使用你本机已有的 Claude Code 或 Codex CLI 订阅能力，不把论文内容上传到额外的托管服务。

## 安装

1. 从 Releases 下载 `ArticleRead-0.1.3-arm64.dmg`。
2. 打开 DMG，把 `ArticleRead.app` 拖到 `/Applications`。
3. 第一次打开时，如果 macOS 提示“文件已损坏”或“无法打开”，在终端运行：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/ArticleRead.app"
```

然后重新打开 `ArticleRead.app`。

## 使用前准备

ArticleRead 桌面版自带应用运行环境和译文 PDF 所需的 TeX 运行时。AI 问答能力会调用你本机已经安装和登录的命令行工具：

- Claude Code：`claude`
- Codex CLI：`codex`

如果你需要 Notion 归档，请在 App 内进入设置并完成 Notion 授权。

## 当前状态

这是 ArticleRead 的公开预览发布仓，用于分发可体验的 macOS DMG 和介绍产品能力。核心产品仍在快速迭代，欢迎通过 Issues 反馈安装、阅读、问答或 Notion 集成中的问题。
