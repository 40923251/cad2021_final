var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository:  https://github.com/mdecourse/cad2021_final \n Github Pages:  https://mde.tw/cad2021_final \n Discussion:  https://github.com/mdecourse/cad2021_final/discussions \n 課程網站:  https://mde.tw/cad2021 \n 作業網站:  https://mde.tw/cad2021_hw \n 指定 HW1:  https://mde.tw/cad2021_hw/content/HW1.html \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 2a CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2a_hw1_cad.txt \n 隨機從 2a 學員名單中 取出 10 個網站 進行查核 ( 2a repo and www list ) \n 隨機從 2b 學員名單中 取出 10 個網站 進行查核 ( 2b repo and www list )', 'tags': '', 'url': 'About.html'}, {'title': 'Final Project', 'text': 'cad2021 Final Project \n 電腦輔助設計實習期末學習驗證與評分網站 \n http://mde.tw/cad2021_final \n 倉儲:  https://github.com/mdecourse/cad2021_final \n 本網站自 2021.12.27 起收集各班各分組成員在本學期各項作業與期末專案所完成的成果, 並藉此進行學員的課程學期成績評分. \n 各班之分組依據  Ｗ7 時自選組員之分組結果 . \n W7 分組結果: \n 2a 總修課人數: 56 = 7x8 表示每組 7 人, 可分為 8 組. \n 2b 總修課人數: 66 = 7x9 + 3 表示有三組可以 8 人一組. \n W14 參與分組總人數: \n 2a 修課人數: 55 人, 仍分為 8 組. H1 標題為 2a, H2 為 2ag1 ~ 2ag8, 各組員以學號為標題, 依學號遞減排列, 設為 H3 頁面, 各學員則將課程學習成果呈現在各自的 H3 頁面中, 並以 Pull Requests 方式提出拉回合併之請求. \n 2b 修課人數: 64 人, 仍分為 9 組. H1 標題為 2b, H2 為 2bg1 ~ 2bg9, 各組員以學號為標題, 依學號遞減排列, 設為 H3 頁面, 各學員則將課程學習成果呈現在各自的 H3 頁面中, 並以 Pull Requests 方式提出拉回合併之請求.', 'tags': '', 'url': 'Final Project.html'}, {'title': 'Notice', 'text': '各組必須先自願或推舉出一位組長與一位副組長負責成為  https://github.com/mdecourse/cad2021_final \xa0 倉儲的管理雙人組, 組長將設為期末倉儲的管理協同者, 擁有合併或拒絕 Pull Requests 的權限, 各組推選出兩位管理學員後, 請將學號登錄至  https://github.com/mdecourse/cad2021_final/discussions/2 \n 各學員利用 Pull Requests 將個人的期末評分內容放入本網站的流程: \n \n 登入自己的 Github 帳號. \n fork  https://github.com/mdecourse/cad2021_final  倉儲到自己的帳號下 \n 將自己帳號下的 cad2021_final\xa0 倉儲以 git clone --recurse-submodules url 到近端進行改版. \n 改版後, 在自己帳號下對 cad2021_final 倉儲提交並推送新版本後, 必須在自季的 cad2021_final 倉儲處建立 Pull Request 後, 請組長與副組長查驗合併後內容無誤後, 且合併至主倉儲與  https://mde.tw/cad2021_final  網頁中. \n 若各組員進行 fork 後,  https://github.com/mdecourse/cad2021_final  倉儲已經被其他組員多次改版, 則該組員必須採用反向 Pull Requests, 將自己帳號下的 cad2021_final 倉儲的版本儘量接近之後處理 Pull Requests 時的 cad2021_final 倉儲版本, 以降低各組組員最後進行 Pull Requests 合併時處理衝突的難度. \n 各組組長與副組長接到組員已經完成特定階段新增的 Pull Requests 後, 必須設法將其版本內容合併至期末評分網站中. \n', 'tags': '', 'url': 'Notice.html'}, {'title': '2a', 'text': '', 'tags': '', 'url': '2a.html'}, {'title': 'demo', 'text': '', 'tags': '', 'url': 'demo.html'}, {'title': 'scrum-1', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 將使用 Solvespace 執行零件繪圖. \n 有關 Solvespace \n 2013.06 Solvespace 1.9 移除限制,  轉為 Freeware . \n 2013.09 Solvespace 2.0 提供下載原始碼.  轉為 GPLv3 free software . \n 2013.12 Solvespace 2.0 正式宣布 轉為 GPL free software . \n 從  https://solvespace.com/forum.pl?action=viewall  列出從 2013.09 Forum 啟用後的所有討論串. \n Solvespace 原始碼:  https://github.com/solvespace/solvespace \n 編譯 Solvespace \n 在 Windows 10 64 位元環境中編譯 Solvespace, 可以下載  compile_copsim_for_pj2022.7z  (檔案大小 4 GB, 解開壓縮後 14 GB) 後啟動可攜程式系統. 以 git clone --recurse-submodules  https://github.com/solvespace/solvespace.git  取得原始碼. \n cd solvespace 後以 mkdir build 建立 build 目錄, 然後 cd build 進入 build 目錄. 先執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 接著再執行: \n mingw32-make \n 就可以完成 solvespace.exe 的編譯. \n 執行這裡利用 MSYS2 所編譯的 solvespace.exe, 必須從 Y:\\msys64_20210419\\mingw64\\bin 目錄複製 libwinpthread-1.dll 檔案, 與 solvespace.exe 放在同一目錄中, 就可以啟動 solvespace.exe. \n 以 MSYS2 編譯 Solvespace 的 log 請參考:  compile_solvespace_log.txt \n 初步 2D 機構分析與基座組立 \n \n \n \n 上列 2D 機構分析與零組件下載:  hw1_solvespace_stage1.7z \n \n \n meArm_in_solvespace_and_coppeliasim_stage2.zip \n \n meArm_in_solvespace.7z \n \n meArm_in_solvespace_coppeliasim.7z \n \n 接下來可以透過 sympy 以符號式運算求解逆向運動方程式: \n 利用  sympy  根據  meArm Pi Technical Overview  中的說明 (修正錯誤後), 解出 Inverse Kinematics 如下: \n 當已知 manimpulator 端點的座標為 (x, y ,z) 時, 求 theta, ltheta (low arm link theta) 與 utheta (upper arm link theta). 利用  sympy  之前必須先以 pip install sympy 安裝模組. \n import sympy as sp\n \n# Define symbols\ntheta, ltheta, utheta, r, x, y, z = sp.symbols("theta ltheta utheta r x y z")\n \n# Define equations, rearranged so expressions equal 0\neq1 = 15 + 50 + 80*sp.sin(ltheta) + 80*sp.sin(utheta) - r\neq2 = 53 + 80*sp.cos(ltheta) - 80*sp.cos(utheta) - z\n# 從 eq3 與 eq4 可以得到 eq5 與 eq6, 將 r 及 theta 表示成 x, y 輸入的函式\n# 因此 r 與 theta 在得知 x, y, z 時就可視為已知\neq3 = r*sp.cos(theta) - x\neq4 = r*sp.sin(theta) - y\neq5 = sp.sqrt(x*x + y*y) - r\neq6 = sp.atan(y/x) - theta\n \n# Solve for theta1 & theta3\nsolution = sp.solve([eq1, eq2], [ltheta, utheta], dict=True)\nprint(solution)\n \n\'\'\'\n[{ltheta: pi - asin(r/80 + sin(2*atan((-160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) + 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))) - 13/16), \n \nutheta: -2*atan((-160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) + 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))}, \n \n{ltheta: asin(-r/80 + sin(2*atan((160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) - 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))) + 13/16) + pi, \n \nutheta: 2*atan((160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) - 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))}, \n \n{ltheta: -asin(-r/80 + sin(2*atan((160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) - 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))) + 13/16), \n \nutheta: 2*atan((160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) - 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))}, \n \n{ltheta: asin(r/80 + sin(2*atan((-160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) + 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))) - 13/16), \n \nutheta: -2*atan((-160*r + sqrt(-r**4 + 260*r**3 - 2*r**2*z**2 + 212*r**2*z - 5368*r**2 + 260*r*z**2 - 27560*r*z - 1499160*r - z**4 + 212*z**3 + 296*z**2 - 1222392*z + 130593244) + 10400)/(r**2 - 130*r + z**2 - 266*z + 15514))}]\n\'\'\' \n 使用者可以設法在 CoppeliaSim meArm 場景中驗證上述推導是否正確 (這是很好的課堂即時驗證題目) 並與  https://github.com/yorkhackspace/meArm  中的控制運算進行比較.', 'tags': '', 'url': 'scrum-1.html'}, {'title': '2ag1', 'text': '', 'tags': '', 'url': '2ag1.html'}, {'title': '2ag2', 'text': '', 'tags': '', 'url': '2ag2.html'}, {'title': '2ag3', 'text': '', 'tags': '', 'url': '2ag3.html'}, {'title': '2ag4', 'text': '', 'tags': '', 'url': '2ag4.html'}, {'title': '2ag5', 'text': '', 'tags': '', 'url': '2ag5.html'}, {'title': '2ag6', 'text': '', 'tags': '', 'url': '2ag6.html'}, {'title': '2ag7', 'text': '', 'tags': '', 'url': '2ag7.html'}, {'title': '2ag8', 'text': '', 'tags': '', 'url': '2ag8.html'}, {'title': '2b', 'text': '', 'tags': '', 'url': '2b.html'}, {'title': '2bg1', 'text': '', 'tags': '', 'url': '2bg1.html'}, {'title': '2bg2', 'text': '', 'tags': '', 'url': '2bg2.html'}, {'title': '2bg3', 'text': '', 'tags': '', 'url': '2bg3.html'}, {'title': '2bg4', 'text': '', 'tags': '', 'url': '2bg4.html'}, {'title': '2bg5', 'text': '', 'tags': '', 'url': '2bg5.html'}, {'title': '2bg6', 'text': '', 'tags': '', 'url': '2bg6.html'}, {'title': '2bg7', 'text': '', 'tags': '', 'url': '2bg7.html'}, {'title': '2bg8', 'text': '', 'tags': '', 'url': '2bg8.html'}, {'title': '2bg9', 'text': '', 'tags': '', 'url': '2bg9.html'}]};