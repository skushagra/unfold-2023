// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import SpheronClient, {ProtocolEnum} from "@spheron/storage";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
	const usersFirstSession = context.globalState.get('FirstSession');
	vscode.window.showInformationMessage(""+usersFirstSession);
	if(usersFirstSession === "true") {
		vscode.window.showInputBox(
			{
				placeHolder: 'Enter your access token',
				prompt: 'Please enter your access token',
				validateInput: (value: string) => {
					if (value.length === 0) {
						return 'Please enter your access token';
					}
					return null;
				}
			}
		).then((value) => {
			if (value) {
				context.globalState.update('accessToken', value);
				context.globalState.update('FirstSession', 'false');
				vscode.window.showInformationMessage('Access Token stored successfully');
			}
		});
	}
	else{
		vscode.window.showInformationMessage('Welcome Back!');
	}
	vscode.window.showInformationMessage('Starting project deployment');
	let disposable = vscode.commands.registerCommand('dos.DeployProject', async () => {
		let tk = context.globalState.get('accessToken');
		if (tk) {
			const client = new SpheronClient({ token: tk as string });
			let currentlyUploaded = 0;
			let filePath = "./";
			const { uploadId, bucketId, protocolLink, dynamicLinks } = await client.upload(
				filePath,
				{
					protocol: ProtocolEnum.IPFS,
					name,
					onUploadInitiated: (uploadId) => {
					console.log(`Upload with id ${uploadId} started...`);
					},
					onChunkUploaded: (uploadedSize, totalSize) => {
					currentlyUploaded += uploadedSize;
					console.log(`Uploaded ${currentlyUploaded} of ${totalSize} Bytes.`);
					},
				}
			);
		}
		else {
			vscode.window.showInformationMessage('Please enter your access token');
		}
	});
	vscode.window.showInformationMessage('Project deployment completed');
	context.subscriptions.push(disposable);

}

// This method is called when your extension is deactivated
export function deactivate() {}
