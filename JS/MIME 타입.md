MIME(Multipurpose Internet Mail Extensions) 타입은 데이터의 종류나 형식을 나타내는 문자열 라벨입니다. 처음에는 이메일 시스템에서 메시지의 본문과 첨부 파일의 형식을 설명하기 위해 도입되었습니다. 그러나 시간이 지나면서 웹에서도 리소스의 형식을 나타내기 위해 광범위하게 사용되게 되었습니다.

MIME 타입은 일반적으로 `type/subtype`과 같은 형식을 가지며, 추가적으로 파라미터를 가질 수 있습니다. 예를 들어, `text/html; charset=UTF-8`에서 `text`는 주 타입, `html`은 부 타입, `charset=UTF-8`은 추가 파라미터입니다.

### 주요 MIME 타입과 예시:

1. **text**:
    
    - `text/plain`: 일반 텍스트 문서
    - `text/html`: HTML 문서
    - `text/css`: CSS 스타일시트
    - `text/javascript`: JavaScript 코드
2. **image**:
    
    - `image/jpeg`: JPEG 이미지
    - `image/png`: PNG 이미지
    - `image/gif`: GIF 이미지
    - `image/svg+xml`: SVG 그래픽
    - `image/webp`: WebP 이미지
3. **audio**:
    
    - `audio/mpeg`: MP3 오디오
    - `audio/wav`: WAV 오디오
4. **video**:
    
    - `video/mp4`: MP4 비디오
    - `video/webm`: WebM 비디오
    - `video/ogg`: OGG 비디오
5. **application**:
    
    - `application/octet-stream`: 모든 종류의 바이너리 데이터
    - `application/json`: JSON 포맷 데이터 [[aplication_json]]
    - `application/xml`: XML 문서 [[XML]]
    - `application/zip`: ZIP 압축 파일
    - `application/pdf`: PDF 문서
6. **multipart**:
    
    - `multipart/form-data`: 웹 폼에서 파일 업로드시 사용 [[multipart&&form-data]]
    - `multipart/mixed`: 여러 부분으로 구성된 메시지 (예: 이메일에 첨부된 파일)
7. **message**:
    
    - `message/http`: HTTP 메시지
    - `message/rfc822`: RFC 822 형식의 메시지 (이메일 메시지)