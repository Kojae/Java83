// 역할: 서비스객체(Service Object)
// => 비즈니스 로직 구현 및 트랜잭션 관
package java83.example.service;

import java.util.List;

import java83.example.vo.Board;

public interface BoardService {

  // 메서드 이름은 가능한 업무 용어를 사용한다.
  void addBoard(Board board);
  List<Board> getBoardList(int pageNo, int pageSize);
  Board getBoard(int no);
  int updateBoard(Board board);
  int deleteBoard(int no);
  
}
