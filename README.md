# ArticleRead

![ArticleRead promotional hero](assets/articleread-promo-hero.png)

ArticleRead 是一个面向论文精读的桌面应用。它把本地论文阅读、划词提问、批注、译文 PDF 生成和 Notion 归档放进同一个工作流里，适合需要高频阅读 arXiv / PDF 论文的研究者、工程师和学生。

当前公开预览版支持 Apple Silicon Mac 和 x64 Linux。

## 下载

- 最新版本：ArticleRead 0.1.6
- macOS：Apple Silicon / arm64，下载 `ArticleRead-0.1.6-arm64.dmg`
- Linux：x64，下载 `articleread-linux-desktop_0.1.6_amd64.deb` 或 `ArticleRead-0.1.6.AppImage`
- SHA256：
  - DMG：`32f290af8f8865f4089187d7868cc64ce22098a56284ae198fea792f1664adcc`
  - macOS ZIP：`8ca57925a0d012ee3787191fc5157ed4f65be5c75560139e1256b9255ac93e6f`
  - Linux AppImage：`2170cf268855ab9d2eb2288292e4a86564b2e357e655a9da0bd32920aa22f075`
  - Linux deb：`939bb66eab9e108d7f9fc50397cd524af921f874a6eaa261c529235972ba4438`

## 你可以用它做什么

- 在本地阅读 PDF 论文，并围绕原文进行精读。
- 选中文本后快速提问、解释、记录手动批注。
- 为论文生成译文 PDF，方便中文语境下快速通读。
- 通过 Notion 集成把阅读成果归档到自己的知识库。
- 使用你本机已有的 Claude Code 或 Codex CLI 订阅能力，不把论文内容上传到额外的托管服务。

## 安装

macOS：

1. 从 Releases 下载 `ArticleRead-0.1.6-arm64.dmg`。
2. 打开 DMG，把 `ArticleRead.app` 拖到 `/Applications`。
3. 第一次打开时，如果 macOS 提示“文件已损坏”或“无法打开”，在终端运行：

```bash
sudo xattr -rd com.apple.quarantine "/Applications/ArticleRead.app"
```

然后重新打开 `ArticleRead.app`。

Linux：

```bash
sudo dpkg -i articleread-linux-desktop_0.1.6_amd64.deb
```

也可以直接运行 AppImage：

```bash
chmod +x ArticleRead-0.1.6.AppImage
./ArticleRead-0.1.6.AppImage
```

## 使用前准备

ArticleRead 桌面版自带应用运行环境和译文 PDF 所需的 TeX 运行时。AI 问答能力会调用你本机已经安装和登录的命令行工具：

- Claude Code：`claude`
- Codex CLI：`codex`

如果你需要 Notion 归档，请在 App 内进入设置并完成 Notion 授权。

## 当前状态

这是 ArticleRead 的公开预览发布仓，用于分发可体验的桌面安装包和介绍产品能力。核心产品仍在快速迭代，欢迎通过 Issues 反馈安装、阅读、问答或 Notion 集成中的问题。
