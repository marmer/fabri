// Type definitions for Web NFC
// Project: https://github.com/w3c/web-nfc
// Definitions by: Takefumi Yoshii <https://github.com/takefumi-yoshii>
// TypeScript Version: 3.9

// This type definitions referenced to WebIDL.
// https://w3c.github.io/web-nfc/#actual-idl-index

/* eslint-disable no-use-before-define */
interface Window {
  NDEFMessage: NDEFMessage
}

declare class NDEFMessage {
  records: ReadonlyArray<NDEFRecord>

  constructor(messageInit: NDEFMessageInit)
}

declare interface NDEFMessageInit {
  records: NDEFRecordInit[]
}

declare type NDEFRecordDataSource = string | BufferSource | NDEFMessageInit

interface Window {
  NDEFRecord: NDEFRecord
}

declare class NDEFRecord {
  readonly recordType: string
  readonly mediaType?: string
  readonly id?: string
  readonly data?: DataView
  readonly encoding?: string
  readonly lang?: string
  toRecords?: () => NDEFRecord[]

  constructor(recordInit: NDEFRecordInit)
}

declare interface NDEFRecordInit {
  recordType: string
  mediaType?: string
  id?: string
  encoding?: string
  lang?: string
  data?: NDEFRecordDataSource
}

declare type NDEFMessageSource = string | BufferSource | NDEFMessageInit

interface Window {
  NDEFReader: NDEFReader
}

declare class NDEFReader extends EventTarget {
  onreading: (this: this, event: NDEFReadingEvent) => any
  onreadingerror: (this: this, error: Event) => any
  scan: (options?: NDEFScanOptions) => Promise<void>
  write: (
    message: NDEFMessageSource,
    options?: NDEFWriteOptions
  ) => Promise<void>

  makeReadOnly: (options?: NDEFMakeReadOnlyOptions) => Promise<void>

  constructor()
}

interface Window {
  NDEFReadingEvent: NDEFReadingEvent
}

declare class NDEFReadingEvent extends Event {
  serialNumber: string
  message: NDEFMessage

  constructor(type: string, readingEventInitDict: NDEFReadingEventInit)
}

interface NDEFReadingEventInit extends EventInit {
  serialNumber?: string
  message: NDEFMessageInit
}

interface NDEFWriteOptions {
  overwrite?: boolean
  signal?: AbortSignal
}

interface NDEFMakeReadOnlyOptions {
  signal?: AbortSignal
}

interface NDEFScanOptions {
  signal: AbortSignal
}
