import { Pipe, PipeTransform } from '@angular/core';

import { Content} from './helper-files/content-interface';

@Pipe ({ name: 'contentType' })

export class ContentTypePipe implements PipeTransform{

    transform(contentList: Content[], SType: string) {
        return contentList.filter(c => c.type == SType)
    }

}

