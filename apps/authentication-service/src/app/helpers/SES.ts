import * as AWS from '@aws-sdk/client-ses';
import { defaultProvider} from '@aws-sdk/credential-provider-node'

export const ses = new AWS.SES({
    apiVersion: '2022-6-22',
    region: 'us-east-2',
    credentialDefaultProvider: defaultProvider,
})


export const transporter = {
    SES: { ses, aws: AWS },
}
