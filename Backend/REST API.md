1. **자원(Resource) 중심**: 웹 서비스는 URL(Uniform Resource Locator)을 통해 접근할 수 있는 자원으로 구성되며, 각 자원은 고유한 URI(Uniform Resource Identifier)를 가지게 됩니다.
    
2. **상태를 유지하지 않음(Statelessness)**: 각 요청 사이에 클라이언트의 상태 정보를 저장하지 않습니다. 모든 요청은 서버로 전송될 때 필요한 모든 정보를 포함해야 합니다.
    
3. **HTTP 메서드 활용**: REST API는 기본적으로 HTTP 프로토콜의 메서드를 사용하여 자원에 대한 CRUD(Create, Read, Update, Delete) 연산을 수행합니다.
    
    - **GET**: 자원을 조회할 때 사용
    - **POST**: 새로운 자원을 생성할 때 사용
    
    - **PUT**: 자원의 전체를 갱신할 때 사용
    
    - **PATCH**: 자원의 일부를 갱신할 때 사용
    - **DELETE**: 자원을 삭제할 때 사용
4. **표현(Representation)**: 클라이언트와 서버 사이에 데이터는 여러 형식으로 전송될 수 있습니다. 가장 일반적인 형식은 JSON과 XML입니다.
    
5. **무상태 연결(Stateless Connection)**: REST는 상태 정보를 유지하지 않으므로 각 요청을 독립적으로 처리합니다.

## [[CRUD]] 와 [[HTTP 메서드]]

#### CRUD : 데이터 관리를 위한 기본 연산을 의미하는 용어

CREATE
READ
UPDATE
DELETE

#### HTTP 메서드 : 웹에서 데이터를 전송하기 위한 프로토콜

클라이언트가 웹 서버에게 어떤 종류의 작업을 요청하는지 나타낸다.

POST
GET
PUT, PATCH(일부)
DELETE


