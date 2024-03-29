import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { CryptographyModule } from "../cryptography/cryptography.module";

import { CreateQuestionUseCase } from "@/domain/forum/application/use-cases/create-question";
import { FetchRecentQuestionsUseCase } from "@/domain/forum/application/use-cases/fetch-recent-questions";
import { RegisterStudentUseCase } from "@/domain/forum/application/use-cases/register-student";
import { AuthenticateStudentUseCase } from "@/domain/forum/application/use-cases/authenticate-student";
import { GetQuestionBySlugUseCase } from "@/domain/forum/application/use-cases/get-question-by-slug";
import { EditQuestionUseCase } from "@/domain/forum/application/use-cases/edit-question";
import { DeleteQuestionUseCase } from "@/domain/forum/application/use-cases/delete-question";
import { AnswerQuestionUseCase } from "@/domain/forum/application/use-cases/answer-question";
import { EditAnswerUseCase } from "@/domain/forum/application/use-cases/edit-answer";
import { DeleteAnswerUseCase } from "@/domain/forum/application/use-cases/delete-answer";
import { FetchQuestionAnswersUseCase } from "@/domain/forum/application/use-cases/fetch-question-answers";
import { CommentOnQuestionUseCase } from "@/domain/forum/application/use-cases/comment-on-question";
import { ChooseQuestionBestAnswerUseCase } from "@/domain/forum/application/use-cases/choose-question-best-answer";
import { DeleteQuestionCommentUseCase } from "@/domain/forum/application/use-cases/delete-question-comment";
import { CommentOnAnswerUseCase } from "@/domain/forum/application/use-cases/comment-on-answer";
import { DeleteAnswerCommentUseCase } from "@/domain/forum/application/use-cases/delete-answer-comment";
import { FetchQuestionCommentsUseCase } from "@/domain/forum/application/use-cases/fetch-question-comments";
import { FetchAnswerCommentsUseCase } from "@/domain/forum/application/use-cases/fetch-answer-comments";

import { AuthenticateController } from "./controllers/authenticate.controller";
import { CreateAccountController } from "./controllers/create-account.controller";
import { CreateQuestionController } from "./controllers/create-question.controller";
import { FetchRecentQuestionsController } from "./controllers/fetch-recents-questions.controller";
import { GetQuestionBySlugController } from "./controllers/get-by-slug.controller";
import { EditQuestionController } from "./controllers/edit-question.controller";
import { DeleteQuestionController } from "./controllers/delete-question.controller";
import { AnswerQuestionController } from "./controllers/answer-question.controller";
import { EditAnswerController } from "./controllers/edit-answer.controller";
import { DeleteAnswerController } from "./controllers/delete-answer.controller";
import { FetchQuestionAnswersController } from "./controllers/fetch-question-answers.controller";
import { CommentOnQuestionController } from "./controllers/comment-on-question.controller";
import { ChooseQuestionBestAnswerController } from "./controllers/choose-question-best-answer.controller";
import { DeleteQuestionCommentController } from "./controllers/delete-question-comment.controller";
import { CommentOnAnswerController } from "./controllers/comment-on-answer.controller";
import { DeleteAnswerCommentController } from "./controllers/delete-answer-comment.controller";
import { FetchQuestionCommentsController } from "./controllers/fetch-question-comments.controller";
import { FetchAnswerCommentsController } from "./controllers/fetch-answer-comments.controller";
import { UpploadAttachmentsController } from "./controllers/uppload-attachment.controller";


@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController, 
    AuthenticateController, 
    CreateQuestionController, 
    FetchRecentQuestionsController, 
    GetQuestionBySlugController, 
    EditQuestionController, 
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentsController,
    FetchAnswerCommentsController,
    UpploadAttachmentsController
  ],
  providers: [
    CreateQuestionUseCase, 
    FetchRecentQuestionsUseCase, 
    RegisterStudentUseCase, 
    AuthenticateStudentUseCase, 
    GetQuestionBySlugUseCase, 
    EditQuestionUseCase, 
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteQuestionCommentUseCase,
    CommentOnAnswerUseCase,
    DeleteAnswerCommentUseCase,
    FetchQuestionCommentsUseCase,
    FetchAnswerCommentsUseCase
  ]
})
export class HttpModule{}