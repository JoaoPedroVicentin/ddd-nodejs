import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"
 
 interface IAnswerQuestionUseCaseRequest {
   instructorId: string
   questionId: string
   content: string
 }
 
 export class AnswerQuestionUseCase {
    constructor(
        private answersRepository: AnswersRepository,
      ) {}
    
      async execute({ instructorId, questionId, content }: IAnswerQuestionUseCaseRequest) {
    const answer = new Answer({
        content,
        authorId: instructorId,
        questionId,
      })

      await this.answersRepository.create(answer)
 
     return answer
   }
 }