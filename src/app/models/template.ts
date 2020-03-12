import { TemplateQuestion } from './template-question';
import { User } from './user';

export class Template {

    public id: number = 0;
    public user: User = new User();
    public questions: TemplateQuestion[] = [];
}