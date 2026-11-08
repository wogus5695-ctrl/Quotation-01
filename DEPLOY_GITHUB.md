# 다른 Windows PC에서 GitHub 업로드 / 사이트 미리보기

## 1. 이전 준비
1. 제공된 ZIP을 다른 컴퓨터에 복사한 후 압축 해제.
2. `modoo_company_site/PROJECT_HANDOFF.md`를 읽고 최신 회사 정보 확인.
3. VS Code와 GitHub Desktop 설치 및 GitHub 계정 로그인.

## 2. GitHub Desktop
1. `File > Add local repository...`에서 `modoo_company_site` 폴더 선택.
2. Git 저장소가 아니라는 안내가 나오면 `create a repository here` 선택. (또는 `File > New repository`에서 해당 폴더를 지정.)
3. 저장소 이름 예: `modoo-company-site`.
4. 모든 변경을 확인한 다음 `Commit to main` 실행.
5. `Publish repository` 선택. 공개 여부를 확인하고 첫 업로드는 Private 권장.
6. 공개 사이트 호스팅을 시작할 때 개인 정보와 `edit.html` 공개 여부 재확인.

## 3. 로컬 브라우저에서 올바르게 보기
- `index.html` 더블 클릭만으로 실행 시 `privacy/` 폴더 연결에서 파일 목록이 나타날 수 있음.
- VS Code의 Live Server 확장으로 `index.html`을 열거나, Python이 있으면 프로젝트 폴더에서 `python -m http.server 8000` 실행 후 `http://localhost:8000/`에 접속.
- `http://localhost:8000/support/`, `/privacy/`, `/terms/` 열어서 확인.

## 4. Cloudflare Pages 정적 배포 예시
- GitHub 저장소를 연결해 정적 사이트 프로젝트를 생성.
- 프레임워크 프리셋: None/Static HTML.
- 빌드 명령: 없음.
- 사이트 루트(출력 디렉터리): 저장소 루트가 `modoo_company_site`이면 해당 루트(`.`), 상위 폴더 저장소이면 `modoo_company_site` 지정.
- **배포 전에 `edit.html` 제거하거나 배포 대상에서 제외.** 필요시 공개 배포용 복사본을 별도로 생성.
- 소유한 도메인 `www.modujonghap.co.kr` 연결 및 HTTPS 확인.
- `/support`, `/privacy`, `/terms` 직접 접속 테스트.

## 5. 다른 ChatGPT에 전달할 문구
다음 메시지와 이 ZIP 파일을 새 계정에 업로드하세요:

> 첨부한 `모두종합환경_GitHub_GPT인수인계.zip`은 제가 진행 중인 회사 홈페이지의 최신 전체 소스입니다. 압축파일 내 `modoo_company_site/PROJECT_HANDOFF.md`와 `DEPLOY_GITHUB.md`, PDF 사용설명서를 읽고 기존 구조/회사정보/앱 정책을 유지하세요. Windows PC에서 GitHub Desktop으로 저장소 생성과 업로드, 정적 호스팅 배포를 초보자도 따라할 수 있게 단계별로 안내해 주세요. 임의로 AI/광고/회원가입/서버 기능을 추가하지 마세요. 고객지원 주소는 https://www.modujonghap.co.kr/support 이며, 미배포 상태라면 먼저 배포와 HTTPS를 확인해 주세요.
