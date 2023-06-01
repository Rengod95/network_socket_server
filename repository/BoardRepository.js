const BoardModel = require("../schemas/BoardSchema");

class MongoRepository {
  constructor() {
    this.boardModel = BoardModel;
  }

  async insertSingleBoard(boardDto) {
    const result = (await this.createBoardDocument(boardDto)).save();
    return result;
  }

  async createBoardDocument(boardDto) {
    const result = await this.boardModel.create(boardDto);
    return result;
  }

  async getBoardDocumentByTitle(title) {
    const result = await this.boardModel.find({ title });
    return result;
  }

  async deleteBoardDocumentByTitle(title) {
    const result = await this.boardModel.deleteOne({ title });
    return result;
  }

  async modifyBoardDocumentByTitle(boardDto, title) {
    const result = await this.boardModel.findOneAndUpdate({ title }, boardDto);
    return result;
  }

  async getAllBoardDocuments() {
    const res = await this.boardModel.find();
    return res;
  }
}

const mongoRepository = new MongoRepository();

module.exports = mongoRepository;
