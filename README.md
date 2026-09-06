# Arknights Craft Modpack (packwiz)

Arknights Craft サーバー用の packwiz MODパック定義リポジトリです。

現行パック `1.0.1` は `operator_skills` 0.4.0 とTLMモデルパック1.3.0を配布し、
Epic Fight 20.14.16／Epic Fight–TLM 1.3.3によるオペレーターの歩行・近接戦闘モーションに対応します。
TaCZ銃の射撃時はTLMの銃撃タスクを維持します。

## 🌐 GitHub Pages 公開設定
1. このリポジトリの **Settings** > **Pages** を開きます。
2. **Build and deployment** の Source で **Deploy from a branch** を選択。
3. Branch で **`main`** / **`/(root)`** を選択して **Save** を押します。
4. 公開される URL:
   `https://<ユーザー名>.github.io/<リポジトリ名>/pack.toml`

## 📦 管理者用コマンド例
- MOD追加 (Modrinth): `packwiz mr add <mod_name>`
- MOD追加 (CurseForge): `packwiz cf add <mod_name>`
- 自作MOD更新: `mods/` に .jar を配置して `packwiz refresh`
- 全MOD一括更新チェック: `packwiz mr update --all`
- インデックス更新: `packwiz refresh`
