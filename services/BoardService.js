const mongoRepository = require("../repository/BoardRepository");

class BoardService {
  constructor() {
    this.mongoRepository = mongoRepository;
  }

  async searchBoardWithTitle(title) {
    return await this.mongoRepository.getBoardDocumentByTitle(title);
  }
  async deleteBoardWithTitle(title) {
    return await this.mongoRepository.deleteBoardDocumentByTitle(title);
  }
  async modifyBoardWithTitle(boardDto, title) {
    return await this.mongoRepository.modifyBoardDocumentByTitle(
      boardDto,
      title
    );
  }

  async createBoard(boardDto) {
    return await this.mongoRepository.insertSingleBoard(boardDto);
  }

  async getAllBoard() {
    return await this.mongoRepository.getAllBoardDocuments();
  }
}

const boardService = new BoardService();
module.exports = boardService;
